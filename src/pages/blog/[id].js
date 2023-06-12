import { MainPostScreen } from "@/components/screens";
import { fetchAPI } from "@/components/utils";

export async function getStaticProps({ params }) {
  const { data } = await fetchAPI(
    `blog-posts-pages/find-by-slug/${params.id}?populate=*`
  );

  const { data: data1 } = await fetchAPI("blog-posts-pages?populate=deep");
  const {
    data: { attributes },
  } = await fetchAPI("blog-page?populate=deep");

  if (!data && !data1 && !attributes) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
      data1,
      attributes,
    },
    revalidate: 60, // In seconds
  };
}
export async function getStaticPaths() {
  const { data } = await fetchAPI("blog-posts-pages?populate=deep");

  const paths = data?.map((post) => ({
    params: { id: post.attributes.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export default function BlogsPage({ data, attributes }) {
  return (
    <MainPostScreen
      data={data}
      attributes={attributes}
      image={attributes?.banner?.image?.data?.attributes?.url}
      titleBanner={attributes?.banner?.title}
      descriptionBanner={attributes?.banner?.description}
      buttonLeft={attributes?.banner?.buttons_links?.button_left_text}
      buttonRight={attributes?.banner?.buttons_links?.button_right_text}
      buttonLeftLink={attributes?.banner?.buttons_links?.button_link_left}
      buttonRightLink={attributes?.banner?.buttons_links?.button_link_right}
    />
  );
}
