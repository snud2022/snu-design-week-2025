import Image from "next/image";
import * as S from "./ProjectImages.style";
import exampleImage from "../../../../public/works/exampleImage.png";

interface ProjectImagesProps {
  images?: string[];
}

export default function ProjectImages({ images }: ProjectImagesProps) {
  // 실제 이미지 데이터로 교체 필요
  const displayImages = images || [exampleImage, exampleImage, exampleImage];

  return (
    <S.Container>
      {displayImages.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt={`작품 이미지 ${index + 1}`}
          width={1920}
          height={1080}
          style={{ width: "100%", height: "auto", objectFit: "contain" }}
        />
      ))}
    </S.Container>
  );
}
