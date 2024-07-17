export interface ICategoryList {
  title: string;
  iconName: string;
}

export interface ICouponList {
  title: string;
  sort: string;
  couponTitle: string;
  expiredDate: string;
  couponAmountLimit: boolean;
  remainAmount: number;
  downloaded: boolean;
  imageMain: string;
  imageSub: string;
}

export interface ILatestNews {
  title: string;
  sort: string;
  subTitle: string;
  disc: string;
  updateTime: string;
  image: string;
}
