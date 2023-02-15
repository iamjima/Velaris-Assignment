
import { Card, Tabs, Avatar, Pagination  } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import TabPane from 'antd/es/tabs/TabPane';
import { useState } from 'react';
import Comment from '../Comment';

const onChange = (key) => {
  console.log(key);
};

function CommentSection() {

  const [conversations, setConversations] = useState([1,2,3])
// setConversations([1,2,3])
    return <div className="CommentSection">
    <Card className='' style={{width:720}}>
    
    {/* <Tabs defaultActiveKey="1" items={items} onChange={onChange} /> */}
    <Tabs>
      <TabPane tab="Conversation" key="1">
        {/* {conversations.map((Conversation, index) => (<div key={index}>  */}
          <Comment></Comment>
        {/* </div>))} */}

        <Pagination defaultCurrent={1} total={50} />
      </TabPane>
      <TabPane tab="Files" key="2">
        
      </TabPane>
      <TabPane tab="Notes" key="3">
        
      </TabPane>
    </Tabs>
  </Card>

    </div>
}



export default CommentSection