import React, {FC} from 'react'

interface IIcon {
  size?: number
  color?: string
}

const SearchIcon : FC<IIcon> = ({size = 24, color = 'white'}) => (
  <svg width={size} height={size} viewBox='-2 -2 24 24' stroke={color} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z" fill={color}/>
  </svg>
)

const LeftIcon : FC<IIcon> = ({size = 24, color = 'white'}) => (
  <svg width={size} height={size} viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.09091 11.4205L0.579545 5.90909L6.09091 0.397727L7.26136 1.55682L3.75568 5.0625H12.2727V6.75568H3.75568L7.26136 10.2557L6.09091 11.4205Z" fill={color}/>
  </svg>
)

const RightIcon : FC<IIcon> = ({size = 24, color = 'white'}) => (
  <svg width={size} height={size} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.18182 11.4205L5.01136 10.2614L8.51705 6.75568H0V5.0625H8.51705L5.01136 1.5625L6.18182 0.397727L11.6932 5.90909L6.18182 11.4205Z" fill={color}/>
  </svg>
)

const ChevronUp : FC<IIcon> = ({size = 24, color = 'white'}) => (
  <svg width={size} height={size} viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 0L0 6L1.41 7.41L6 2.83L10.59 7.41L12 6L6 0Z" fill={color}/>
  </svg>
)

const Close : FC<IIcon> = ({size = 24, color = 'white'}) => (
  <svg width={size} height={size} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill={color}/>
  </svg>
)

const ChevronLeft : FC<IIcon> = ({size = 24, color = 'white'}) => (
  <svg width={size} height={size} viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 6L6 12L7.41 10.59L2.83 6L7.41 1.41L6 0L0 6Z" fill={color}/>
  </svg>
)

const ChevronRight : FC<IIcon> = ({size = 24, color = 'white'}) => (
  <svg width={size} height={size} viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 6L2 0L0.59 1.41L5.17 6L0.59 10.59L2 12L8 6Z" fill={color}/>
  </svg>
)

const Check : FC<IIcon> = ({size = 24, color = 'white'}) => (
  <svg width={size} height={size} viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.99993 7.8L1.19993 5L0.266602 5.93334L3.99993 9.66667L11.9999 1.66667L11.0666 0.733337L3.99993 7.8Z" fill={color}/>
  </svg>
)

export { SearchIcon, LeftIcon, RightIcon, ChevronUp, Close, ChevronLeft, ChevronRight, Check }