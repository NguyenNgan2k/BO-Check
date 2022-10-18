import React, { useState } from "react";
import slide from './slide.css';
import img1 from 'assets/image/banner/bn1.png';
import img2 from 'assets/image/banner/bn2.png';
import img3 from 'assets/image/banner/bn3.png';
import { BsEmojiNeutralFill } from "react-icons/bs";

const arrImage = [
    {
        img: img1,
        title: 'Thị trường',
        content: 'Bắt đầu trải nghiệm đầu tư tại Trang Thị trường - nơi tích hợp đầy đủ các nội dung và tính năng giúp bạn nắm bắt được mọi nhịp đập của thị trường đầu tư sôi động!'
    },
    {
        img: img2,
        title: 'Đầu tư',
        content: 'Từ theo dõi các sản phẩm tiềm năng tới ra những quyết định đầu tư quan trọng - tất cả chỉ trong một màn hình!'
    },
    {
        img: img3,
        title: 'Quản lý tài sản',
        content: 'Đầu tư tự tin hơn với chức năng quản lý tài sản chính xác cùng liên kết ngân hàng, ví điện tử tiện gọn'
    }
]

function Slide() {
    const [selected, setSelected] = useState(2);
    return (
        <div className="slide-container" >
            {
                arrImage &&
                arrImage.map((item, index) => {
                    if (index < selected - 2) {
                        return (
                            <div className="hindeleft"
                                key={index}
                            >

                            </div>
                        );
                    }
                    if (index === selected - 2) {
                        return (
                            <div className="prev"
                                key={index}
                                onClick={() => setSelected(index + 1)}
                            >
                                <img src={item.img} />
                                <div className="title">{item.title}</div>
                                <div className="content">{item.content}</div>
                            </div>
                        );
                    }
                    if (index === selected - 1) {
                        return (
                            <div className="select"
                                key={index}
                                onClick={() => setSelected(index + 1)}
                            >
                                <img src={item.img} />
                                <div className="title">{item.title}</div>
                                <div className="content">{item.content}</div>
                            </div>
                        );
                    }
                    if (index === selected) {
                        return (
                            <div className="next"
                                key={index}
                                onClick={() => setSelected(index + 1)}
                            >
                                <img src={item.img} />
                                <div className="title">{item.title}</div>
                                <div className="content">{item.content}</div>
                            </div>
                        );
                    }
                    if (index > selected) {
                        return (
                            <div className="hinderight"
                                key={index}
                            >

                            </div>
                        );
                    }
                    return null;

                })
            }
        </div>
    );
}
export default Slide;