import React, { Component } from "react";
import style from "./Dynamic.css";
import styles from "./fabu.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
// import fetch from "dva/fetch";
import axios from "axios"
import "antd-mobile/dist/antd-mobile.css";
import { Input,Upload, Icon, Modal ,Tooltip ,message} from 'antd';

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

class Fabu extends Component {
  state = {
    inputValue:'',  //输入框输入值
    previewVisible: false,
    previewImage: '',
    fileList: [
    ],
  };
  
  handleCancel = () => this.setState({ previewVisible: false },console.log(3333));

  handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    this.setState({
      previewImage: file.url || file.preview,
      previewVisible: true,
    });
    console.log(11111)
  };

  handleChange = ({ fileList }) => this.setState({ fileList },console.log(22222));

  render() {
    const { TextArea } = Input;
    const { previewVisible, previewImage, fileList ,inputValue} = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
      <div className={style.app}>
        <div className={style.wrap}>
          <Header title="发布动态" isBack={true}  />
           <main>
             {/* 输入的内容 */}
                <TextArea rows={4} 
                placeholder="说点什么..." 
                className={styles.input} 
                value={inputValue}
                onChange={this.handleInput.bind(this)}/>

              {/* 提示 */}
                <div className={styles.six}>
                    <Tooltip title="最多6张" placement="right">
                      <span className={styles.text}>N</span>
                    </Tooltip>
                    <div>6/6</div>
                </div>

              {/* 上传图片 */}
                <div className={styles.clearfix}>
                    <Upload
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    listType="picture-card"
                    fileList={fileList}
                    onPreview={this.handlePreview}
                    onChange={this.handleChange}
                    >
                    {fileList.length >= 2? null : uploadButton}
                    </Upload>
                    <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                    <img alt="example" style={{ width: '100%' }} src={previewImage} />
                    </Modal>
                </div>

                {/* 发布 */}
                <div className={styles.btn} onClick={this.handlev.bind(this)}>发布</div>
           </main>
          <Footer />
        </div>
      </div>
    );
  }
  
  // 输入框
  handleInput(e){
    this.setState({
      inputValue:e.target.value
    })
  }

  // 发布
  async handlev(){
      let {fileList,inputValue} =this.state
      let src=null
      fileList.map(item=>{
        return src=item.thumbUrl
      })
      console.log()

      let res = await axios.post('/api/fabu', {
          title:"沐恩",
          con:inputValue,
          img1:src,
          img2:'',
          lookNum:0,
          message:0,
          fabulous:0,
          userId:"liuqi",
          logo:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1321463267,128419202&fm=26&gp=0.jpg"
        }) 
      if(res.data.code==1){
        this.props.history.push('/Dynamic')
        message.info(res.data.message);
      }else{
        message.info(res.data.message);
      }
  }


  
}
export default Fabu;
