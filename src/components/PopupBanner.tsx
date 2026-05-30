"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

interface Popup {
  id: number;
  title: string;
  image_url: string;
  link_url: string | null;
}

interface PopupBannerProps {
  popups: Popup[];
}

export default function PopupBanner({ popups }: PopupBannerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    // 체크: 오늘 하루 보지 않기가 설정되어 있는지
    const hideUntil = localStorage.getItem("hidePopupUntil");
    if (hideUntil) {
      const hideDate = new Date(hideUntil);
      if (new Date() < hideDate) {
        return; // 아직 만료되지 않았으면 렌더링 안함
      } else {
        localStorage.removeItem("hidePopupUntil"); // 만료되었으면 삭제
      }
    }
    
    if (popups.length > 0) {
      setIsVisible(true);
    }
  }, [popups.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % popups.length);
  }, [popups.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + popups.length) % popups.length);
  }, [popups.length]);

  // Auto rolling
  useEffect(() => {
    if (!isVisible || popups.length <= 1 || isPaused) return;

    const timer = setInterval(() => {
      handleNext();
    }, 4000); // 4초마다 롤링

    return () => clearInterval(timer);
  }, [isVisible, popups.length, isPaused, handleNext]);

  const handleCloseToday = () => {
    // 다음날 자정으로 만료 시간 설정
    const tomorrow = new Date();
    tomorrow.setHours(24, 0, 0, 0);
    localStorage.setItem("hidePopupUntil", tomorrow.toISOString());
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible || popups.length === 0) return null;

  const currentPopup = popups[currentIndex];

  const ImageComponent = (
    <div className="relative w-full aspect-[2/3] bg-stone-100">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPopup.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0"
        >
          <Image
            src={currentPopup.image_url}
            alt={currentPopup.title}
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );

  return (
    <div 
      className="fixed left-4 top-24 z-50 w-80 sm:w-96 max-w-[calc(100vw-2rem)] sm:left-8 sm:top-32 shadow-2xl rounded-lg overflow-hidden bg-white border border-stone-200"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 팝업 콘텐츠 (링크가 있으면 a태그로 감쌈) */}
      {currentPopup.link_url ? (
        <a href={currentPopup.link_url} target="_blank" rel="noopener noreferrer" className="block relative">
          {ImageComponent}
        </a>
      ) : (
        <div className="relative">
          {ImageComponent}
        </div>
      )}

      {/* 하단 컨트롤 영역 */}
      <div className="bg-[#FAF9F6] border-t border-stone-200">
        {/* 페이징 영역 */}
        {popups.length > 1 && (
          <div className="flex justify-center py-3 border-b border-stone-200">
            <div className="flex items-center gap-3 bg-stone-500/80 text-white rounded-full px-4 py-1.5 text-xs">
              <button onClick={handlePrev} className="hover:text-stone-200 transition-colors">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              </button>
              <span className="font-medium tracking-widest">{currentIndex + 1} / {popups.length}</span>
              <button onClick={handleNext} className="hover:text-stone-200 transition-colors">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>
        )}
        
        {/* 오늘하루보지않기 / 닫기 영역 */}
        <div className="flex text-xs font-medium text-stone-600">
          <button 
            onClick={handleCloseToday}
            className="flex-1 py-3 text-center hover:bg-stone-100 transition-colors"
          >
            오늘하루 보지 않기
          </button>
          <div className="w-px bg-stone-200" />
          <button 
            onClick={handleClose}
            className="flex-1 py-3 text-center hover:bg-stone-100 transition-colors"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
