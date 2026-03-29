import Map "mo:core/Map";
import List "mo:core/List";
import Nat "mo:core/Nat";
import Time "mo:core/Time";
import Order "mo:core/Order";



actor {
  type DownloadLinks = {
    androidApk : Text;
    googlePlay : Text;
    appStore : Text;
    androidTv : Text;
    fireTv : Text;
  };

  type Review = {
    id : Nat;
    name : Text;
    rating : Nat;
    comment : Text;
    submittedAt : Time.Time;
  };

  let downloadLinks : DownloadLinks = {
    androidApk = "https://firebasestorage.googleapis.com/v0/b/zibo-9149-androd-id.appspot.com/o/zibo-android-apk-app.apk?alt=media&token=9b77e612-62f9-45ea-8fbb-9ad359119434";
    googlePlay = "https://play.google.com/store/apps/details?id=com.zibo.app";
    appStore = "https://apps.apple.com/us/app/zibo-app/id6452144183";
    androidTv = "https://firebasestorage.googleapis.com/v0/b/zibo-9149-androd-id.appspot.com/o/zibo-android-tv-app.apk?alt=media&token=f02eb0fb-026b-4ff6-9e85-c071f1a3b3cc";
    fireTv = "https://www.amazon.com/dp/B0CBWTCS13";
  };

  let reviews = Map.empty<Nat, Review>();
  var nextReviewId = 1;

  public query func getDownloadLinks() : async DownloadLinks {
    downloadLinks;
  };

  type ReviewInput = {
    name : Text;
    rating : Nat;
    comment : Text;
  };

  func compareReviewsByTime(a : Review, b : Review) : Order.Order {
    Int.compare(a.submittedAt, b.submittedAt);
  };

  public query func getAllReviews() : async [Review] {
    let reviewsIter = reviews.values();
    let reviewList = List.fromIter<Review>(reviewsIter);
    reviewList.toArray();
  };

  public shared func submitReview(input : ReviewInput) : async Text {
    if (input.rating < 1 or input.rating > 5) {
      return "Rating must be between 1 and 5";
    };

    let newReview : Review = {
      id = nextReviewId;
      name = input.name;
      rating = input.rating;
      comment = input.comment;
      submittedAt = Time.now();
    };

    reviews.add(nextReviewId, newReview);
    nextReviewId += 1;

    "Review submitted successfully";
  };

  public query func getReviewCount() : async Nat {
    reviews.size();
  };
};
