import {Button} from 'native-base';
import React, {Dispatch, memo, SetStateAction, useCallback} from 'react';
import {View} from 'react-native';
import Modal from 'react-native-modal';
import styles from './options-modal.styles';

type OptionsModalProps = {
  isModal: boolean;
  setModal: Dispatch<SetStateAction<boolean>>;
  onEdit?: () => void;
  onDelete?: () => void;
};

const OptionsModal = memo(
  ({isModal, setModal, onEdit, onDelete}: OptionsModalProps) => {
    const closeModal = useCallback(() => {
      setModal(false);
    }, [setModal]);

    const editHandler = useCallback(() => {
      closeModal();
      if (onEdit) {
        setTimeout(() => {
          onEdit();
        }, 500);
      }
    }, [closeModal, onEdit]);

    const deleteHandler = useCallback(() => {
      closeModal();
      if (onDelete) {
        setTimeout(() => {
          onDelete();
        }, 500);
      }
    }, [closeModal, onDelete]);

    return (
      <Modal
        isVisible={isModal}
        onSwipeComplete={closeModal}
        onBackButtonPress={closeModal}
        onBackdropPress={closeModal}
        swipeDirection={['down']}
        style={styles.viewModal}>
        <View style={styles.modal}>
          <View style={styles.header}>
            <View style={styles.line} />
          </View>
          <View style={styles.content}>
            <View>
              <Button _text={styles.buttonText} mb={2} onPress={editHandler}>
                Edit
              </Button>
              <Button
                colorScheme="secondary"
                _text={styles.buttonText}
                mb={2}
                onPress={deleteHandler}>
                Delete
              </Button>
            </View>
          </View>
        </View>
      </Modal>
    );
  },
);

export default OptionsModal;
