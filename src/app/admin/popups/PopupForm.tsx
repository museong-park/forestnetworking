"use client";

import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import Image from "next/image";
import { createPopup, updatePopup } from "@/app/actions/popups";

interface PopupFormProps {
  initialData?: {
    id: number;
    title: string;
    image_url: string;
    link_url: string | null;
    is_active: boolean;
  };
}

export default function PopupForm({ initialData }: PopupFormProps) {
  const router = useRouter();
  const [isPending, setIsPending] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(initialData?.image_url || null);
  const formRef = useRef<HTMLFormElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new window.Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const MAX_WIDTH = 800; // 팝업은 크지 않으므로 800px 정도로 제한
        const MAX_HEIGHT = 1200;
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height;
            height = MAX_HEIGHT;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        ctx?.drawImage(img, 0, 0, width, height);
        
        // 용량 감소를 위해 0.8 정도로 압축
        const dataUrl = canvas.toDataURL("image/jpeg", 0.8);
        setPreviewImage(dataUrl);
      };
      img.src = event.target?.result as string;
    };
    reader.readAsDataURL(file);
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isPending) return;
    
    if (!previewImage) {
      alert("팝업 이미지를 등록해주세요.");
      return;
    }

    setIsPending(true);

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);
      formData.set("image_url", previewImage); // base64 string
      // is_active checkbox is handled automatically, but we ensure it passes false if unchecked
      const isActive = form.is_active.checked;
      formData.set("is_active", isActive.toString());

      let result;
      if (initialData) {
        result = await updatePopup(initialData.id, formData);
      } else {
        result = await createPopup(formData);
      }

      if (result?.error) {
        alert(result.error);
      } else if (result?.success && result.redirectUrl) {
        router.push(result.redirectUrl);
      }
    } catch (error) {
      console.error("Submit error:", error);
      alert("오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
    } finally {
      setIsPending(false);
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-stone-700 mb-1">
          제목 (관리용) <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="title"
          defaultValue={initialData?.title}
          required
          className="w-full rounded-md border border-border px-4 py-2 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
          placeholder="예: 2024 산촌활력특화사업 안내"
        />
        <p className="mt-1 text-xs text-stone-500">사용자에게는 보이지 않으며, 관리자 목록에서 식별하기 위한 제목입니다.</p>
      </div>

      <div>
        <label className="block text-sm font-medium text-stone-700 mb-1">
          연결 링크 URL (선택)
        </label>
        <input
          type="url"
          name="link_url"
          defaultValue={initialData?.link_url || ""}
          className="w-full rounded-md border border-border px-4 py-2 focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand"
          placeholder="https://..."
        />
        <p className="mt-1 text-xs text-stone-500">팝업 클릭 시 이동할 링크입니다. 없으면 비워두세요.</p>
      </div>

      <div>
        <label className="block text-sm font-medium text-stone-700 mb-1">
          팝업 이미지 <span className="text-red-500">*</span>
        </label>
        
        <div className="mt-2 flex items-start gap-6">
          <div 
            className="relative w-48 h-64 bg-stone-100 rounded-lg border-2 border-dashed border-stone-300 flex items-center justify-center overflow-hidden flex-shrink-0 cursor-pointer hover:bg-stone-50 transition-colors"
            onClick={() => fileInputRef.current?.click()}
          >
            {previewImage ? (
              <Image
                src={previewImage}
                alt="Popup Preview"
                fill
                className="object-contain"
              />
            ) : (
              <div className="text-center p-4">
                <svg className="mx-auto h-8 w-8 text-stone-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-sm font-medium text-stone-500">이미지 첨부</span>
              </div>
            )}
          </div>
          
          <div className="flex-1 space-y-3">
            <input
              type="file"
              accept="image/*"
              className="hidden"
              ref={fileInputRef}
              onChange={handleImageChange}
            />
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="px-4 py-2 bg-white border border-border rounded-md text-sm font-medium text-stone-700 hover:bg-stone-50"
            >
              {previewImage ? "이미지 변경" : "이미지 선택"}
            </button>
            <p className="text-xs text-stone-500 leading-relaxed">
              * 권장 해상도: 400px x 600px (비율 2:3 내외)<br/>
              * 10MB 이하의 JPG, PNG, WEBP 파일<br/>
              * 선택한 이미지는 자동으로 웹용으로 최적화(압축)되어 저장됩니다.
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 pt-2">
        <input
          type="checkbox"
          id="is_active"
          name="is_active"
          defaultChecked={initialData?.is_active ?? true}
          className="h-4 w-4 rounded border-stone-300 text-brand focus:ring-brand"
        />
        <label htmlFor="is_active" className="text-sm font-medium text-stone-700">
          이 팝업을 홈페이지에 표시 (활성화)
        </label>
      </div>

      <div className="flex justify-end pt-6 gap-4 border-t border-border">
        <button
          type="button"
          onClick={() => router.back()}
          className="px-6 py-2.5 text-stone-600 hover:bg-stone-100 rounded-md font-medium transition-colors"
        >
          취소
        </button>
        <button
          type="submit"
          disabled={isPending}
          className="rounded-md bg-brand px-6 py-2.5 font-medium text-white hover:bg-brand-hover transition-colors disabled:opacity-50 flex items-center gap-2"
        >
          {isPending && (
            <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          )}
          {isPending ? "처리 중..." : (initialData ? "수정완료" : "등록완료")}
        </button>
      </div>
    </form>
  );
}
