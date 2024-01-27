import { FC, memo, useState } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import StarIcon from '@/shared/assets/icons/star.svg';

import { Icon } from '../Icon/Icon';

import cls from './StarRating.module.scss';

interface StarRatingProps {
    className?: string;
    onSelect?: (startsCount: number) => void;
    size?: number;
    selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5];

export const StarRating: FC<StarRatingProps> = memo((
  props: StarRatingProps,
) => {
  const {
    className,
    size = 30,
    onSelect,
    selectedStars = 0,
  } = props;

  const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars);
  const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

  const onHover = (starsCount: number) => () => {
    if (!isSelected) {
      setCurrentStarsCount(starsCount);
    }
  };

  const onLeave = () => {
    if (!isSelected) {
      setCurrentStarsCount(0);
    }
  };

  const onClick = (starsCount: number) => () => {
    if (!isSelected) {
      onSelect?.(starsCount);
      setCurrentStarsCount(starsCount);
      setIsSelected(true);
    }
  };

  return (
    <div className={classNames('', {}, [className])}>
      {stars.map((starNumber) => (
        <Icon
          Svg={StarIcon}
          key={starNumber}
          className={classNames(
            cls.starIcon,
            {
              [cls.selected]: isSelected,
              [cls.hovered]: currentStarsCount >= starNumber,
              [cls.normal]: currentStarsCount <= starNumber,
            },
            [],
          )}
          width={size}
          height={size}
          onMouseEnter={onHover(starNumber)}
          onMouseLeave={onLeave}
          onClick={onClick(starNumber)}
        />
      ))}
    </div>
  );
});
