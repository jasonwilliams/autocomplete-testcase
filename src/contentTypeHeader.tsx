import { ContentType } from "./interfaces";

export const generateSearchUrl = (headerType: ContentType) => {
  switch (headerType) {
      case ContentType.video:
          return '/video';
      case ContentType.audio:
          return '/audio';
      case ContentType.email:
          return '/email';
      default:
          return null;
  }
};

export const ContentTypeHeader = ({ type, className }) => {
  return <div>Hello</div>;
};
