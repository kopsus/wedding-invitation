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
  getStory,
  getYoutubeLink,
} from "@/api/index";

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
        params={params}
      />
    </>
  );
}
