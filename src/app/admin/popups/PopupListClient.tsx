"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { deletePopup, togglePopupActive, updatePopupOrder } from "@/app/actions/popups";

interface Popup {
  id: number;
  title: string;
  image_url: string;
  link_url: string | null;
  is_active: boolean;
  sort_order: number;
  created_at: string;
}

export default function PopupListClient({ initialPopups }: { initialPopups: Popup[] }) {
  const [popups, setPopups] = useState(initialPopups);
  const [isUpdatingOrder, setIsUpdatingOrder] = useState(false);

  async function handleDelete(id: number) {
    if (!window.confirm("정말 삭제하시겠습니까?")) return;
    const result = await deletePopup(id);
    if (result.success) {
      setPopups(popups.filter(p => p.id !== id));
    } else {
      alert(result.error);
    }
  }

  async function handleToggleActive(id: number, currentActive: boolean) {
    const result = await togglePopupActive(id, !currentActive);
    if (result.success) {
      setPopups(popups.map(p => p.id === id ? { ...p, is_active: !currentActive } : p));
    } else {
      alert(result.error);
    }
  }

  async function handleMoveUp(index: number) {
    if (index === 0) return;
    const newPopups = [...popups];
    const temp = newPopups[index];
    newPopups[index] = newPopups[index - 1];
    newPopups[index - 1] = temp;
    
    // Update sort_order locally
    newPopups.forEach((p, i) => {
      p.sort_order = i + 1;
    });
    
    setPopups(newPopups);
    saveOrder(newPopups);
  }

  async function handleMoveDown(index: number) {
    if (index === popups.length - 1) return;
    const newPopups = [...popups];
    const temp = newPopups[index];
    newPopups[index] = newPopups[index + 1];
    newPopups[index + 1] = temp;
    
    // Update sort_order locally
    newPopups.forEach((p, i) => {
      p.sort_order = i + 1;
    });
    
    setPopups(newPopups);
    saveOrder(newPopups);
  }

  async function saveOrder(newPopups: Popup[]) {
    setIsUpdatingOrder(true);
    const result = await updatePopupOrder(newPopups.map(p => ({ id: p.id, sort_order: p.sort_order })));
    setIsUpdatingOrder(false);
    if (!result.success) {
      alert("순서 변경에 실패했습니다.");
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-border overflow-hidden">
      {isUpdatingOrder && <div className="p-2 text-center text-sm text-brand bg-brand/10">순서 업데이트 중...</div>}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-stone-600">
          <thead className="bg-stone-50 text-stone-700">
            <tr>
              <th className="px-6 py-4 font-semibold w-24">순서</th>
              <th className="px-6 py-4 font-semibold w-32">이미지</th>
              <th className="px-6 py-4 font-semibold">제목/링크</th>
              <th className="px-6 py-4 font-semibold w-24 text-center">상태</th>
              <th className="px-6 py-4 font-semibold w-48 text-right">관리</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {popups.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-6 py-8 text-center text-stone-500">
                  등록된 팝업이 없습니다.
                </td>
              </tr>
            ) : (
              popups.map((popup, index) => (
                <tr key={popup.id} className="hover:bg-stone-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex flex-col gap-1 items-center">
                      <button 
                        onClick={() => handleMoveUp(index)} 
                        disabled={index === 0}
                        className="text-stone-400 hover:text-brand disabled:opacity-30"
                      >
                        ▲
                      </button>
                      <span className="font-medium text-stone-700">{index + 1}</span>
                      <button 
                        onClick={() => handleMoveDown(index)} 
                        disabled={index === popups.length - 1}
                        className="text-stone-400 hover:text-brand disabled:opacity-30"
                      >
                        ▼
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="relative w-20 h-24 bg-stone-100 rounded border border-border overflow-hidden">
                      <Image
                        src={popup.image_url}
                        alt={popup.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-medium text-stone-900 mb-1">{popup.title}</div>
                    <div className="text-xs text-stone-400 max-w-[200px] truncate">
                      {popup.link_url || "링크 없음"}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button
                      onClick={() => handleToggleActive(popup.id, popup.is_active)}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        popup.is_active 
                          ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-200" 
                          : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                      }`}
                    >
                      {popup.is_active ? "활성" : "비활성"}
                    </button>
                  </td>
                  <td className="px-6 py-4 text-right space-x-3">
                    <Link
                      href={`/admin/popups/${popup.id}`}
                      className="text-brand hover:underline font-medium"
                    >
                      수정
                    </Link>
                    <button
                      onClick={() => handleDelete(popup.id)}
                      className="text-red-600 hover:underline font-medium"
                    >
                      삭제
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
