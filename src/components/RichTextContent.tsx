interface RichTextContentProps {
  html: string;
  className?: string;
}

/**
 * HTML 콘텐츠를 안전하게 렌더링하는 컴포넌트.
 * RichTextEditor에서 작성된 게시물 내용을 표시할 때 사용합니다.
 */
export default function RichTextContent({
  html,
  className = "",
}: RichTextContentProps) {
  // 레거시 plain text (HTML 태그 없음)인지 감지
  const isPlainText = !/<[a-z][\s\S]*>/i.test(html);

  if (isPlainText) {
    return (
      <div className={`prose prose-stone max-w-none whitespace-pre-wrap ${className}`}>
        {html}
      </div>
    );
  }

  return (
    <div
      className={`prose prose-stone max-w-none
        prose-headings:font-bold prose-headings:text-foreground
        prose-p:text-foreground prose-p:leading-relaxed
        prose-strong:text-foreground
        prose-a:text-brand prose-a:underline
        prose-img:rounded-xl prose-img:shadow-sm prose-img:max-w-full
        prose-ul:list-disc prose-ol:list-decimal
        prose-blockquote:border-l-brand prose-blockquote:text-muted
        prose-hr:border-border
        [&_img]:mx-auto
        ${className}`}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
