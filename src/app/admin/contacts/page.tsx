import { getContactSubmissions } from "@/app/actions/contact";

export default async function AdminContactsPage() {
  const contacts = await getContactSubmissions();

  return (
    <div>
      <h2 className="text-2xl font-bold text-brand mb-6">문의 접수 내역</h2>
      
      <div className="bg-white rounded-xl shadow-sm border border-border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-stone-600">
            <thead className="bg-stone-50 text-stone-700 font-medium">
              <tr>
                <th className="px-6 py-4">접수일</th>
                <th className="px-6 py-4">회사명 (이름)</th>
                <th className="px-6 py-4">직급/위치</th>
                <th className="px-6 py-4">연락처</th>
                <th className="px-6 py-4">이메일</th>
                <th className="px-6 py-4 truncate max-w-xs">내용</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {contacts.length === 0 ? (
                <tr>
                  <td colSpan={6} className="text-center py-8 text-stone-500">
                    아직 접수된 문의가 없습니다.
                  </td>
                </tr>
              ) : (
                contacts.map((c) => (
                  <tr key={c.id} className="hover:bg-stone-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      {new Date(c.created_at).toLocaleDateString("ko-KR")}
                    </td>
                    <td className="px-6 py-4 font-medium text-stone-900">
                      {c.company} ({c.name})
                    </td>
                    <td className="px-6 py-4">{c.position}</td>
                    <td className="px-6 py-4">{c.phone}</td>
                    <td className="px-6 py-4">{c.email}</td>
                    <td className="px-6 py-4 max-w-xs truncate" title={c.message}>
                      {c.message}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
