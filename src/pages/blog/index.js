import { BlogScreen } from "@/components/screens";
import { fetchAPI } from "@/components/utils";

export async function getStaticProps() {
  const { data } = await fetchAPI("blog-posts-pages?populate=deep");
  const {
    data: { attributes },
  } = await fetchAPI("blog-page?populate=deep");

  if (!data) {
    return {
      notFound: true,
    };
  }

  if (!attributes) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
      attributes,
    },
    revalidate: 60, // In seconds
  };
}

export default function Blog({ data, attributes }) {
  return (
    <BlogScreen
      attributes={attributes}
      data={data}
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
