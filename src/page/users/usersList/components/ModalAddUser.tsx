import { Form, Input, Modal, Typography } from 'antd';
import { useState } from 'react';
import styles from '../UsersList.module.css';
import { FaUserGroup } from 'react-icons/fa6';
import { RiFileAddFill } from 'react-icons/ri';

const ModalAddUser = () => {
  const { Text } = Typography;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = () => {
    setIsModalOpen(false);
  };

  const handleCancelModal = () => {
    setIsModalOpen(false);
  };

  const showOpenModal = () => {
    setIsModalOpen(true);
  };
  return (
    <div className=''>
      <Modal
        title='Tạo người dùng mới'
        open={isModalOpen}
        onOk={handleSubmit}
        onCancel={handleCancelModal}
        style={{ top: 60 }}
      >
        <Form
          name='complex-form'
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 500 }}
          layout='vertical'
        >
          <Form.Item style={{ marginBottom: 0, width: '100%' }}>
            <Form.Item>
              <Text style={{ fontWeight: 'bold' }}>Thông tin cá nhân</Text>
            </Form.Item>
            <Form.Item
              label='Họ'
              style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label='Tên'
              style={{
                display: 'inline-block',
                width: 'calc(50% - 8px)',
                margin: '0 8px',
              }}
            >
              <Input />
            </Form.Item>
            <Form.Item label='Số điện thoại'>
              <Input autoComplete='off' />
            </Form.Item>
            <Form.Item
              label='Mật khẩu'
              style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
            >
              <Input.Password autoComplete='off' />
            </Form.Item>
            <Form.Item
              label='Nhập lại mật khẩu'
              style={{
                display: 'inline-block',
                width: 'calc(50% - 8px)',
                margin: '0 8px',
              }}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item label='Email'>
              <Input />
            </Form.Item>
            <Form.Item label='Địa chỉ'>
              <Input placeholder='abc@mind.vn' />
            </Form.Item>
          </Form.Item>
        </Form>
      </Modal>
      <div className={styles.titleNavbar}>
        <div className={styles.titleList}>
          <FaUserGroup style={{ fontSize: '24px' }} />
          <Text style={{ fontWeight: 'initial', fontSize: '24px' }}>
            Danh sách người dùng
          </Text>
        </div>
        <div className={styles.createModal}>
          <RiFileAddFill onClick={showOpenModal} />
        </div>
      </div>
    </div>
  );
};

export default ModalAddUser;
