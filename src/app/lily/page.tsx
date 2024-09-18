import Banner1 from "@/components/banner1/Banner1";
import {
  getAudio,
  getBanner2,
  getCover,
  getFooter,
  getgallery,
  getGiftCard,
  getLove,
  getMempelai,
  getProgram,
  getStory,
  getYoutubeLink,
} from "@/api/index";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const dataMempelai = await getMempelai();
  const dataCover = await getCover();

  return {
    title: `${dataMempelai[0].nama_panggilan_pria} & ${dataMempelai[0].nama_panggilan_wanita}`,
    description: `Undangan pernikahan ${dataMempelai[0].nama_panggilan_pria} & ${dataMempelai[0].nama_panggilan_wanita}. Kami mengundang Anda untuk hadir dan memberikan doa restu.`,
    robots: "noindex, nofollow",
    openGraph: {
      title: `Pernikahan ${dataMempelai[0].nama_lengkap_pria} & ${dataMempelai[0].nama_lengkap_Wanita}`,
      description: `Undangan pernikahan ${dataMempelai[0].nama_panggilan_pria} & ${dataMempelai[0].nama_panggilan_wanita}. Kami mengundang Anda untuk hadir dan memberikan doa restu.`,
      images: [dataCover[0].image[0]],
    },
  };
}

export default async function Home({ params }) {
  const dataCover = await getCover();
  const dataMempelai = await getMempelai();
  const dataBanner2 = await getBanner2();
  const dataGallery = await getgallery();
  const dataAudio = await getAudio();
  const dataGiftCard = await getGiftCard();
  const dataStory = await getStory();
  const dataLove = await getLove();
  const dataYtLink = await getYoutubeLink();
  const dataFooter = await getFooter();
  const dataProgram = await getProgram();

  return (
    <>
      <Banner1
        dataMempelai={dataMempelai[0]}
        dataBanner2={dataBanner2}
        dataCover={dataCover[0]}
        dataAudio={dataAudio}
        dataGallery={dataGallery}
        dataGiftCard={dataGiftCard}
        dataStory={dataStory}
        dataLove={dataLove}
        dataYtLink={dataYtLink}
        dataFooter={dataFooter}
        dataProgram={dataProgram}
        params={params}
      />
    </>
  );
}
