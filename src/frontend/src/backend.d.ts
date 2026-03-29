import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface DownloadLinks {
    androidApk: string;
    androidTv: string;
    fireTv: string;
    appStore: string;
    googlePlay: string;
}
export type Time = bigint;
export interface ReviewInput {
    name: string;
    comment: string;
    rating: bigint;
}
export interface Review {
    id: bigint;
    name: string;
    submittedAt: Time;
    comment: string;
    rating: bigint;
}
export interface backendInterface {
    getAllReviews(): Promise<Array<Review>>;
    getDownloadLinks(): Promise<DownloadLinks>;
    getReviewCount(): Promise<bigint>;
    submitReview(input: ReviewInput): Promise<string>;
}
