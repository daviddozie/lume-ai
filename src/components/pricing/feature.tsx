export const Feature = () => {
    return (
        <div className="md:pt-13 pt-4 w-[90%] mx-auto mt-40">
            <h1 className="text-center uppercase text-sm font-medium text-[#111114] font-inter">Feature</h1>
            <h1 className="text-4xl md:pb-4 py-2 text-[#111114] font-recoleta font-semibold text-center">
                See what it Includes
            </h1>
            <div className="flex justify-center items-center p-6">
                <div className="w-full overflow-x-auto">
                    <table className="w-full border-collapse border border-[#ADA6FE] text-left overflow-hidden">
                        <thead>
                            <tr className="divide-x divide-[#ADA6FE] py-6 px-4 h-[100px]">
                                <th className="bg-[#5144EA] text-[#F7F7FF] p-6 text-[22px] font-semibold w-1/4"></th>
                                <th 
                                className="bg-[#5144EA] text-[#F7F7FF] p-6 text-[22px] font-semibold text-center">Starter plan</th>
                                <th className="bg-[#5144EA] text-[#F7F7FF] p-6 text-[22px] font-semibold w-1/4 text-center">Premium plan</th>
                                <th className="bg-[#5144EA] text-[#F7F7FF] p-6 text-[22px] font-semibold w-1/4 text-center">Professional plan</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-[#ADA6FE] divide-x divide-[#ADA6FE] h-[100px]">
                                <td className="p-4 text-[#111114] text-[20px] font-inter">Price</td>
                                <td className="p-4 text-center text-[#111114]">$0</td>
                                <td className="p-4 text-center text-[#111114]">$9</td>
                                <td className="p-4 text-center text-[#111114]">$14</td>
                            </tr>
                            {[
                                "AI powered mood tracker",
                                "Guided meditation & breathwork",
                                "Daily Check ins with Ai companion",
                                "Emotional analytic dashboard",
                                "Personalized growth plans",
                                "Expert led session and workshop",
                                "Mindfulness reminders",
                                "Priority support",
                            ].map((item, index) => (
                                <tr className="border-b border-[#ADA6FE] divide-x divide-[#ADA6FE] h-[100px]" key={index}>
                                    <td className="p-4 text-[#111114] text-[20px] font-inter">{item}</td>
                                    <td className="p-4 text-center"><span className="inline-block w-5 h-5 bg-indigo-600 rounded-full text-white flex items-center justify-center text-xs font-bold">✓</span></td>
                                    <td className="p-4 text-center"><span className="inline-block w-5 h-5 bg-indigo-600 rounded-full text-white flex items-center justify-center text-xs font-bold">✓</span></td>
                                    <td className="p-4 text-center"><span className="inline-block w-5 h-5 bg-indigo-600 rounded-full text-white flex items-center justify-center text-xs font-bold">✓</span></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}