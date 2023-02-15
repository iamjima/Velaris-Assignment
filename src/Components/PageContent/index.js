
import { Card, Steps, Button, Form, Input, Radio } from 'antd';
import { useState } from 'react';
function PageContent() {

  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState('horizontal');
  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };
  const formItemLayout =
    formLayout === 'horizontal'
      ? {
        labelCol: {
          span: 4,
        },
        wrapperCol: {
          span: 14,
        },
      }
      : null;
  const buttonItemLayout =
    formLayout === 'horizontal'
      ? {
        wrapperCol: {
          span: 14,
          offset: 4,
        },
      }
      : null;

  return <div className="PageContent">
    <div>
      <Card style={{ width: 720 }}>
        <div>
          <p className='HeaderText-2'>Onboard new user</p>
        </div>
        <div className='CustomPadding'>
        <Steps
          current={1}
          items={[
            {
              title: 'Add user',

            },
            {
              title: 'Assign roles',

            },
            {
              title: 'Review & confirm',

            },
          ]}
        />
        </div>

        <div>
        <Form
          {...formItemLayout}
          layout={formLayout}
          form={form}
          initialValues={{
            layout: formLayout,
          }}
          onValuesChange={onFormLayoutChange}
          style={{
            maxWidth: 600,
          }}
        >
          <Form.Item label="Role" name="layout">
            <Radio.Group value={formLayout}>
              <Radio.Button value="User">User</Radio.Button>
              <Radio.Button value="Editor">Editor</Radio.Button>
              <Radio.Button value="Admin">Admin</Radio.Button>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Name">
            <Input placeholder="Enter Name" />
          </Form.Item>
          <Form.Item label="Remarks">
            <Input placeholder="Add remarks" />
          </Form.Item>
          <Form.Item {...buttonItemLayout}>
            <Button type="primary">Add User</Button>
          </Form.Item>
        </Form>
        </div>







      </Card>



    </div>
    <div>

    </div>

  </div>
}

export default PageContent