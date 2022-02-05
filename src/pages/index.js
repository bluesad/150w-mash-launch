import React from 'react'
import Layout from "../components/layout";
import Timer from "../components/timer"
import Particles from 'react-particles-js';
import { AiOutlineWeibo, AiOutlineWechat } from "react-icons/ai";

const particlesOptions = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
};

class IndexPage extends React.Component {
  state={
    email: ''
  }
  handleV = (e) => {
    this.setState({ email: e.target.value })
  }
  render() {
    return(
      <Layout>
        <div className="bgimg">
          <div className="bg-layout">
          <Particles className="particles" params={particlesOptions} />
            <div className="middle">
              <div className="content">
                <h1 className="h1">即将发售</h1>
                <Timer date="02/22/2022" time="19:00" />
                <p>Mash就是麦咻！请输入您的邮箱获得最新讯息～</p>
                <input name="email" type="text" placeholder="email address" />
                <button className="button">关注</button>
                <div id="mc_embed_signup">
              </div>
                <div className="btn-group">
                  {/*Facebook*/}
                  <a href="https://weibo.com/u/7673103976" className="button-social" rel="nofollow noreferrer" target="_blank">
                    {/* <svg style={{width:24, height:24}} viewBox="0 0 24 24">
                      <path fill="#FFF" d="M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M18,5H15.5A3.5,3.5 0 0,0 12,8.5V11H10V14H12V21H15V14H18V11H15V9A1,1 0 0,1 16,8H18V5Z" />
                    </svg> */}
                    <AiOutlineWeibo color="white" />
                  </a>
                  {/*LinkedIn*/}
                  <a href="https://www.xiaohongshu.com/user/profile/611a3e18000000000101d668" className="button-social"  rel="nofollow noreferrer" target="_blank">
                    {/* <svg style={{width:24, height:24}} viewBox="0 0 24 24">
                      <path fill="#FFF" d="M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M18.5,18.5V13.2A3.26,3.26 0 0,0 15.24,9.94C14.39,9.94 13.4,10.46 12.92,11.24V10.13H10.13V18.5H12.92V13.57C12.92,12.8 13.54,12.17 14.31,12.17A1.4,1.4 0 0,1 15.71,13.57V18.5H18.5M6.88,8.56A1.68,1.68 0 0,0 8.56,6.88C8.56,5.95 7.81,5.19 6.88,5.19A1.69,1.69 0 0,0 5.19,6.88C5.19,7.81 5.95,8.56 6.88,8.56M8.27,18.5V10.13H5.5V18.5H8.27Z" />
                    </svg> */}
                    <svg style={{width:24, height:24}} viewBox="0 0 30 30">
                      <g>
                        <path fill="red" d="M8.9,5h12.2C23.3,5,25,6.7,25,8.9v12.2c0,2.2-1.7,3.9-3.9,3.9H8.9C6.7,25,5,23.3,5,21.1V8.9C5,6.7,6.7,5,8.9,5
		z"/>
                        <path fill="white" d="M23.6,17.2c-0.3,0.7-0.7,0.9-1.4,0.8c-0.5-0.1-0.7-0.3-0.8-0.9h0.9c0.2,0,0.3,0,0.3-0.3V16
		c0-0.2-0.1-0.4-0.4-0.4h-1.5V18h-1.1v-2.4h-1.1v-1.1h1.1v-1h-0.7v-1.1c0.2,0,0.5,0,0.7,0v-0.4h1.1c0,0.3,0.1,0.4,0.4,0.4
		c0.9,0,1.3,0.5,1.3,1.3v0.7c0.7,0,1.1,0.3,1.3,0.8V17.2L23.6,17.2z M20.6,13.4c0,0.3,0,0.6,0,0.8c0,0.1,0.1,0.2,0.2,0.2
		c0.1,0,0.4,0,0.4-0.1c0-0.3,0-0.5,0-0.8C21.1,13.5,20.8,13.5,20.6,13.4L20.6,13.4z M9.8,12v5c0,0.7-0.5,1.1-1.1,1
		C8.2,17.9,8,17.6,8,17.1h0.7V12C8.7,12,9.8,12,9.8,12z M14.5,12c-0.3,0.5-0.6,1.1-0.8,1.6c0.4,0,0.9,0,1.3-0.1l-0.7,1.4
		c0,0.1-0.1,0.1-0.1,0.2c-0.2,0.5-0.2,0.5,0.3,0.5c0,0,0.1,0,0.2,0c-0.1,0.3-0.3,0.5-0.4,0.8c0,0-0.1,0.1-0.1,0.1
		c-0.4,0-0.8,0-1.2,0c-0.3,0-0.4-0.3-0.3-0.5c0.1-0.3,0.3-0.7,0.4-1c0-0.1,0.1-0.2,0.2-0.4h-0.5c-0.5,0-0.6-0.2-0.4-0.7
		c0.3-0.7,0.7-1.3,1-2L14.5,12L14.5,12z M6.4,16.2c0.1-0.4,0.2-0.8,0.2-1.2c0.1-0.5,0.1-1,0.1-1.5h1.2c-0.2,1.3,0,2.7-0.8,4
		c-0.2-0.4-0.4-0.8-0.7-1.2V16.2z M23.6,13.1c-0.3,0.4-0.7,0.4-1.1,0.4c-0.1-0.6,0-0.9,0.3-1c0.3-0.1,0.5,0,0.8,0.3V13.1z"/>
                        <path fill="white" d="M17.2,16.9h0.9c0.2,0,0.2,0.1,0.3,0.3c0,0.9,0.1,0.9-0.8,0.9h-3.2c0.2-0.4,0.3-0.7,0.5-1
		c0-0.1,0.2-0.1,0.3-0.1H16v-3.4h-0.7v-1.1h2.6v1.1h-0.7V16.9z M10.6,13.5h1.1c0,0.7,0,1.3,0.2,2c0.2,0.7-0.1,1.3-0.5,1.9
		C10.9,17,10.6,15.6,10.6,13.5z M12.6,16.9h1.8c-0.2,0.4-0.3,0.7-0.5,1c0,0-0.1,0.1-0.2,0.1H12C12.2,17.6,12.4,17.2,12.6,16.9
		L12.6,16.9z"/>
                      </g>
                    </svg>

                  </a>
                  {/*Twitter*/}
                  <a href="#" className="button-social"><svg style={{width:24, height:24}} viewBox="0 0 24 24">
                    <path fill="#FFF" d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z" />
                  </svg></a>
                  {/*Instagram*/}
                  <a href="#小程序://Lockerr/品牌主页/TOmwoHfKQMJyOOH" className="button-social">
                    {/* <svg style={{width:24, height:24}} viewBox="0 0 24 24">
                      <path fill="#FFF" d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
                    </svg> */}
                    <AiOutlineWechat color="white" />
                  </a>

                </div>
              </div>
            </div>
            <div className="bottomleft">
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default IndexPage
