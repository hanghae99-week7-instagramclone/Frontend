import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import SwiperImage from "../components/SwiperImage";
import Modal from "../elements/Modal";
import { asyncEditPost, asyncWritePost } from "../redux/modules/postListSlice";
import "./Posting.css";

const Posting = ({
  modalPostingVisible,
  setModalPostingVisible,
  memberInfo,
  postInfo,
  setModalPostOptionVisible,
}) => {
  console.log("posting page", postInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fileInput = useRef();
  const [fileImage, setFileImage] = useState([]); // image list
  const [fileImageUrl, setFileImageUrl] = useState(
    postInfo ? postInfo.imgUrlList : [],
  ); // image url list
  const [writeVisible, setWriteVisible] = useState(postInfo ? true : false);
  // const [postingWriteVisible, setPostingWriteVisible] = useState(false);

  const [posting, setPosting] = useState(postInfo ? postInfo.content : "");

  const onImgChange = (e) => {
    const imgList = e.target.files;
    const imgUrlList = [];
    console.log("imgList", imgList, imgUrlList);

    for (let i = 0; i < imgList.length; i++) {
      imgUrlList.push(URL.createObjectURL(imgList[i]));
    }
    console.log(imgUrlList);

    setFileImage(imgList);
    setFileImageUrl(imgUrlList);
    setWriteVisible(true);
  };

  const onClickBackBtn = () => {
    if (postInfo) {
			setModalPostingVisible(false);
			// setModalPostOptionVisible(false);
    } else {
      setWriteVisible(false);
      setFileImage([]);
      setFileImageUrl([]);
    }
  };

  const onClickPostBtn = () => {
    if (posting === "" || fileImageUrl === []) {
      alert("글을 작성해주세요");
    } else {
      let formData = new FormData();

      const data = {
        content: posting,
      };

      for (let i = 0; i < fileImage.length; i++) {
        formData.append("multipartFile", fileImage[i]);
      }

      // formData.append('multipartFile', fileImage);
      formData.append(
        "postRequestDto",
        new Blob([JSON.stringify(data)], {
          type: "application/json",
        }),
      );

      for (const keyValue of formData) console.log(keyValue);

      if (postInfo) {
        dispatch(asyncEditPost({ data: formData, postId: postInfo.id }));
        setModalPostOptionVisible(false);
        // navigate('/')
        // window.location.replace('/')
      } else {
        dispatch(asyncWritePost(formData));
      }

      setModalPostingVisible(false);
      console.log("finish dispatch");
    }
  };

  return (
    <Modal
      modalVisible={modalPostingVisible}
      setModalVisible={setModalPostingVisible}
      width="60%"
      minWidth="700px"
      maxWidth="1100px"
      outline="none"
      zIndex="100"
      borderRadius="20"
    >
      <div className="modal-posting-wrapper">
        {/* 글 작성 모달 헤더 */}
        <div className="modal-posting-header">
          {writeVisible ? (
            // 이미지 미리보기
            <div className="modal-posting-img-preview-header">
              <button onClick={onClickBackBtn}>이전</button>
              <div>새 게시물 만들기</div>
              <button onClick={onClickPostBtn}>공유하기</button>
            </div>
          ) : (
            // 이미지 선택
            <div>새 게시물 만들기</div>
          )}
        </div>

        {/* 글 작성 내용 */}
        {writeVisible ? (
          <div className="modal-posting-write-content">
            <div
              className="modal-posting-img-preview"
              style={{ display: "flex" }}
            >
              {/* <SwiperImage data={fileImageUrl} /> */}
              <img src={fileImageUrl[0]} alt="" />
            </div>
            <div className="modal-posting-write-wrap">
              {/* <div className="modal-posting-write"> */}
              <div className="post-header">
                <div className="post-user-profile">
                  <img
                    alt="post-user-profile"
                    src={
                      memberInfo.profileUrl
                        ? memberInfo.profileUrl
                        : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/510px-Default_pfp.svg.png?20220226140232"
                    }
                  />
                  <span>{memberInfo.nickname}</span>
                </div>
              </div>
              {/* </div> */}
              <div className="modal-posting-write-container">
                <div className="modal-posting-write-textarea">
                  <textarea
                    type="text"
                    placeholder="문구 입력..."
                    value={posting}
                    onChange={(e) => setPosting(e.target.value)}
                  ></textarea>
                </div>
                <div className="modal-posting-etc">
                  <div>위치 추가</div>
                  <div>접근성</div>
                  <div>고급 설정</div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="modal-posting-content">
            <div>사진과 동영상을 여기에 끌어다 놓으세요</div>
            <button className="modal-posting-img-btn">
              <label htmlFor="file">컴퓨터에서 선택</label>
              <input
                type="file"
                multiple="multiple"
                ref={fileInput}
                // style={{display: 'none'}}
                accept="image/*"
                onChange={onImgChange}
              />
            </button>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default Posting;
