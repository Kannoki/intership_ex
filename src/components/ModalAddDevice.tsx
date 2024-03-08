import { Form, Input, Modal, Typography } from 'antd';
import { useState } from 'react';
import styles from '../page/users/usersList/UsersList.module.css';
import { FaUserGroup } from 'react-icons/fa6';
import { RiFileAddFill } from 'react-icons/ri';

const ModalAddDevice = () => {
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
        title='Tạo thiết bị mới'
        open={isModalOpen}
        onOk={handleSubmit}
        onCancel={handleCancelModal}
        style={{ top: 180 }}
      >
        <Form
          name='complex-form'
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 350, height: '200px', lineHeight: '10px' }}
          layout='vertical'
        >
          <Form.Item style={{ marginBottom: 0 }}>
            <Form.Item>
              <Text style={{ fontWeight: 'bold' }}>Thông tin thiết bị</Text>
            </Form.Item>
            <Form.Item label='Mã thiết bị'>
              <Input />
            </Form.Item>
            <Form.Item label='Model'>
              <Input />
            </Form.Item>
          </Form.Item>
        </Form>
      </Modal>
      <div className={styles.titleNavbar}>
        <div className={styles.titleList}>
          <FaUserGroup style={{ fontSize: '24px' }} />
          <Text style={{ fontWeight: 'initial', fontSize: '24px' }}>
            Danh sách thiết bị
          </Text>
        </div>
        <div className={styles.createModal}>
          <RiFileAddFill onClick={showOpenModal} />
        </div>
      </div>
    </div>
  );
};

export default ModalAddDevice;
