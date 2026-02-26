import { Form } from '../../../components/molecules/Form/Form';
import { FormFieldset } from '../../../components/atoms/internal/FormFieldset/FormFieldset';
import { Input } from '../../../components/atoms/Input/Input';
import { Checkbox } from '../../../components/atoms/Checkbox/Checkbox';
import { Radio } from '../../../components/atoms/Radio/Radio';
import { TextArea } from '../../../components/atoms/TextArea/TextArea';
import { useForm } from '../../../hooks/useForm';
import { useState } from 'react';
import { Heading } from '../../../components/atoms/Heading/Heading';
import { Modal } from '../../../components/organisms/Modal/Modal';

export const FormShowcase = () => {
  const [submittedData, setSubmittedData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleData = data => {
    setSubmittedData(data);
    openModal();
  };

  const { handleSubmit, isLoading, fieldErrors, serverError, isSuccess } = useForm(handleData);

  return (
    <div className="form-showcase showcase-item">
      <Form
        title="Form"
        onSubmit={handleSubmit}
        servererror={serverError}
        isSuccess={isSuccess}
        submitText={isLoading ? 'Submitting data' : 'Submit'}
      >
        <FormFieldset legend="Input fieldset">
          <div className="form__grid">
            <Input
              label="First name"
              placeholder="John"
              name="firstName"
              autoComplete="given-name"
              errorHelperText={fieldErrors.firstName}
            />
            <Input
              label="Surname"
              placeholder="Doe"
              name="lastName"
              autoComplete="family-name"
              errorHelperText={fieldErrors.lastName}
            />
            <Input
              label="Phone number"
              placeholder="+34 600 000 000"
              name="tel"
              autoComplete="tel"
              type="tel"
              errorHelperText={fieldErrors.tel}
            />
            <Input
              label="Email"
              placeholder="example@example.com"
              name="email"
              autoComplete="email"
              type="email"
              required
              errorHelperText={fieldErrors.email}
            />
          </div>
        </FormFieldset>
        <FormFieldset legend="Text area fieldset">
          <TextArea
            label="How can we help you"
            name="message"
            errorHelperText={fieldErrors.message}
          />
        </FormFieldset>
        <FormFieldset legend="Checkbox fieldset">
          <Checkbox
            label="Email notifications"
            name="email_pref"
            errorHelperText={fieldErrors.email_pref}
          />
          <Checkbox
            label="SMS notifications"
            name="sms_pref"
            errorHelperText={fieldErrors.sms_pref}
          />
        </FormFieldset>
        <FormFieldset required legend="Radio fieldset" errorHelperText={fieldErrors.radioTest}>
          <Radio name="radioTest" label="Option 1" value="option-1" required />
          <Radio name="radioTest" label="Option 2" value="option-2" required />
        </FormFieldset>
      </Form>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <Heading level={3}>Submitted data:</Heading>
        <pre className="code-block">{JSON.stringify(submittedData, null, 2)}</pre>
      </Modal>
    </div>
  );
};
