import SectionTitle from "../../components/SectionTitle";
import Link from "next/link";
export default function Records() {
  return (
    <>
      <SectionTitle id="report">牟展佑 William Mou</SectionTitle>
      <h2 className="text-center text-2xl font-bold -mt-4 mb-4">學員心得</h2>
      <div className="container prose prose-invert lg:prose-xl">
        <p>常常，我們總覺得拼命的看書與學習，便可以使自己快速成長。 然而，有所遺漏的是，當我們獨自精進時，常常會忽略了其他更重要的技能。缺少與他人互動，或許會錯誤的認知某些觀念在「合作」的特性，進而無法妥善運用，甚至本末倒置，使得自己的使用習慣與常人迥異。舉例而言，在運用例如 Git 版本控制工具時，自己也僅能體認他強大的功能中的一小部分；架設環境時的習慣，可能不是最好的方式等等。諸如此類的零零總總，或許在平常不會被我們所留意，但在與人合作時，卻十分重要；習慣之後，也能對開發的流程有較清晰的輪廓。</p>
        <p>以上的新穎的觀念，是直到高一時，我參加 SITCON 夏令營才有所領悟。營期間，前半部會有高人的知識教學間經驗分享，不管之前是否學過相關概念，皆能找到一些更佳的觀念或技巧，改善自己的習慣。每一門課程會相互羈絆，透過逐步的教學疊加觀念，我們可以掌握更多相關知識；直至營期後半部，大家能夠在黑客松小試身手，運用前面所學，莽莽撞撞的合作撰寫出一個 chatbot ，縱然做出來的成果不一定精緻、完美，但在過程中與團隊一起拼命學習、除錯、交流的經歷，一定會成為難以忘懷的開發回憶。</p>
        <p>今年，我即將自高中畢業，在 SITCON 夏令營過後的兩年間，我接觸了許多不同的領域，也錄取了清華學院學士班；能從一無所知，走向自我探索，很大程度是因為在營期間的各種「大開眼界」與體認到「黑客松的精神」，驅使我不斷向未知學習。</p>
        <Link href="/#reports"
          className="px-4 py-2 bg-[#01405D] hover:bg-[#013249] rounded-full inline-flex gap-2 items-center leading-4 no-underline text-base"
        ><i className='bx bx-chevron-left text-xl' ></i> 返回首頁</Link>
      </div>
    </>
  );
}