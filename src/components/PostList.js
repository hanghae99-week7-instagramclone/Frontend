import React from "react";
import './PostList.css';

const PostList = () => {
  return (
		<div className="post_list">
			<div className="post">
				<div className="post_header">
					<div className="post_user_profile">
						<img
							className=""
							alt="user_profile"
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/510px-Default_pfp.svg.png?20220226140232"
						/>
						<span>nickname</span>
					</div>
					<svg aria-label="옵션 더 보기" role="img" viewBox="0 0 24 24">
						<circle cx="12" cy="12" r="1.5"></circle>
						<circle cx="6" cy="12" r="1.5"></circle>
						<circle cx="18" cy="12" r="1.5"></circle>
					</svg>
				</div>

				<div className="post_image_btn">
					<div className="post_image">
						<img
							alt="post_image"
							src="https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-9/82895319_3086466004790781_4663987480163254272_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=973b4a&_nc_ohc=Fnpfjr8-wTIAX_LMcoE&_nc_ht=scontent-ssn1-1.xx&oh=00_AT_DyCQEirCRa6Ge5WrCsFI3K-6rI3Q_K7LYK1qidBdB0w&oe=6324D52C"
						/>
					</div>
					<div className="post_btn_list">
						<div className="post_btn_container">
							<svg aria-label="활동 피드" role="img" viewBox="0 0 24 24">
								<path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path>
							</svg>

							<svg aria-label="댓글 달기" role="img" viewBox="0 0 24 24">
								<path
									d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z"
									fill="none"
									stroke="currentColor"
									stroke-linejoin="round"
									stroke-width="2"
								/>
							</svg>

							<svg aria-label="게시물 공유" role="img" viewBox="0 0 24 24">
								<line
									fill="none"
									stroke="currentColor"
									stroke-linejoin="round"
									stroke-width="2"
									x1="22"
									x2="9.218"
									y1="3"
									y2="10.083"
								/>
								<polygon
									fill="none"
									points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
									stroke="currentColor"
									stroke-linejoin="round"
									stroke-width="2"
								/>
							</svg>
						</div>

						<div className="post_btn_container">
							<svg aria-label="저장" role="img" viewBox="0 0 24 24">
								<polygon
									fill="none"
									points="20 21 12 13.44 4 21 4 3 20 3 20 21"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
								/>
							</svg>
						</div>
					</div>
				</div>

				<div className="post_content">
					<div>
						<span>좋아요 {}개</span>
					</div>
					<div>

					</div>
				</div>
			</div>
		</div>
	);
};

export default PostList;
