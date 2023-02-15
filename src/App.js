
import './App.css';
import { Button, Space, ConfigProvider } from 'antd';
import PageContent from './Components/PageContent';
import CommentSection from './Components/CommentSection';
import UploadCv from './Components/UploadCv';


function App() {


  return (

    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#6F6AF8',
        },
      }}
    >
      <div className="App">


        <div className='HeaderText'>
        <p> Welcome!</p>
        </div>
        <div className='Layout'>

          <Space className="">
            <CommentSection>
            </CommentSection>
          </Space>
          <Space className='UserDetails'>
            <PageContent></PageContent>
            <UploadCv></UploadCv>
          </Space>

        </div>
      </div>
    </ConfigProvider>



  );
}

export default App;
