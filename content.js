// ফ্রেন্ড রিকোয়েস্ট পাঠানোর ফাংশন
function sendFriendRequests() {
  let buttons = document.querySelectorAll('div[aria-label="Add Friend"]');
  buttons.forEach((btn, i) => {
    setTimeout(() => {
      btn.click();
      console.log("✅ Sent friend request #" + (i + 1));
    }, i * 5000); // প্রতি ৫ সেকেন্ডে একটি
  });
}
