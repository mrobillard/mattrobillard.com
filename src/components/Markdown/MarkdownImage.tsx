import { LazyLoadImage } from 'react-lazy-load-image-component';

export type MarkdownImageProps = {
  src?: string;
  alt?: string;
};

const MarkdownImage: React.FC<MarkdownImageProps> = ({ src, alt }) => (
  <LazyLoadImage
    src={src}
    alt={alt}
    placeholder={
      <span className="flex w-full h-[19rem] md:h-[38rem] bg-[rgba(11, 36, 54, 0.05)] animate-pulse" />
    }
    className="w-full h-auto overflow-hidden rounded-[1.3rem] object-cover object-center my-[3rem]"
  />
);

export default MarkdownImage;
