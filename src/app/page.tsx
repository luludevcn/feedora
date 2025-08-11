import Footer from "@/components/footer";
import Header from "@/components/header";
import siteConfig from "@/config/site";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header></Header>
      <div className="w-full">
        <h2 className="text-3xl ml-5 mt-5">{siteConfig.slogan}</h2>
        <ul className="flex gap-4 items-center h-[600px]">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 11].map((val, i) => {
            return (
              <li key={val}>
                <Image alt="logo" width={600} height={600} className="w-fit h-fit" src={'/feedora-high-resolution-logo.png'}></Image>
              </li>
            )
          })}
        </ul>

      </div>
      <Footer></Footer>
    </>
  )
}