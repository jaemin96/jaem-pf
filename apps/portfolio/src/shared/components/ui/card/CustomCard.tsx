"use client";

import * as React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@shared/components/ui/card";
import { Button } from "@shared/components/ui/button";
import { useRouter } from "next/navigation";
import { CustomCarousel, CarouselItem } from "@shared/components/ui/carousel";
import { TypographyP } from "@shared/components/ui/typography";

interface ImageItem {
  id: string | number;
  src?: string | null;
  alt?: string;
}

interface CustomCardProps {
  images: ImageItem[];
  description: React.ReactNode;
  footerLabel?: string;
  onEdit?: () => void;
  onDelete?: () => void;
  cardHeight?: string;
  route: string;
}

export const CustomCard = ({
  images,
  description,
  footerLabel,
  onEdit,
  onDelete,
  cardHeight = "h-[370px]",
  route,
}: CustomCardProps) => {
  const router = useRouter();

  return (
    <Card
      className={`w-full ${cardHeight} flex flex-col overflow-hidden rounded-2xl shadow-md`}
    >
      <CardHeader className="p-0 cursor-pointer">
        <div
          className="h-54 w-full bg-gray-700 flex items-center justify-center text-gray-300"
          onClick={() => router.push(route)}
        >
          <CustomCarousel orientation="vertical" loop>
            {images.map((img) => (
              <CarouselItem
                key={img.id}
                className="flex items-center justify-center bg-gray-800"
              >
                {img.src ? (
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-[216px] object-cover"
                  />
                ) : (
                  <span>{img?.alt}</span>
                )}
              </CarouselItem>
            ))}
          </CustomCarousel>
        </div>
      </CardHeader>

      <CardContent className="p-4 flex-1 overflow-y-auto">
        <TypographyP className="text-gray-800 text-base">
          {description}
        </TypographyP>
      </CardContent>

      <CardFooter className="flex items-center justify-between px-4 py-3 border-t border-gray-200 bg-gray-50">
        <div className="flex gap-2">
          {onEdit && (
            <Button variant="outline" size="sm" onClick={onEdit}>
              수정
            </Button>
          )}
          {onDelete && (
            <Button variant="outline" size="sm" onClick={onDelete}>
              삭제
            </Button>
          )}
        </div>
        {footerLabel && (
          <span className="text-xs text-muted-foreground">{footerLabel}</span>
        )}
      </CardFooter>
    </Card>
  );
};
