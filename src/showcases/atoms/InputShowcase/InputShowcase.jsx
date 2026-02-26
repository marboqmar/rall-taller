import './InputShowcase.css';
import { Input } from '../../../components/atoms/Input/Input';
import { Heading } from '../../../components/atoms/Heading/Heading';
import { Checkbox } from '../../../components/atoms/Checkbox/Checkbox';
import { Radio } from '../../../components/atoms/Radio/Radio';
import { TextArea } from '../../../components/atoms/TextArea/TextArea';

export const InputShowcase = () => {
  return (
    <div className="input-showcase showcase-item">
      <Heading>Inputs</Heading>
      <div className="input-showcase__wrapper showcase-item__wrapper">
        <div className="input-showcase__input-group grid gap-md">
          <Input
            className="input-showcase__input-example"
            label="Text type"
            id="text-showcase-input"
            placeholder="Placeholder text"
            name="name"
            autoComplete="name"
          />
          <Input
            className="input-showcase__input-example"
            label="Password type"
            type="password"
            id="password-showcase-input"
            name="password"
            autoComplete="current-password"
          />
          <Input
            className="input-showcase__input-example"
            label="Number type"
            type="number"
            id="number-showcase-input"
            placeholder="12345"
            name="test-number"
          />
          <Input
            className="input-showcase__input-example"
            label="Date type"
            type="date"
            id="date-showcase-input"
            name="birthday"
            autoComplete="bday"
          />
          <Input
            className="input-showcase__input-example"
            label="Required"
            required
            id="required-showcase-input"
          />
          <Input
            className="input-showcase__input-example"
            label="With helper text"
            id="helper-text-showcase-input"
            helperText="This is a helper text"
          />
          <Input
            className="input-showcase__input-example"
            label="Read only"
            id="read-only-showcase-input"
            value="This value can not be edited"
            readOnly
          />
          <Input
            className="input-showcase__input-example input-showcase__example--focused"
            label="Focused"
            id="focused-showcase-input"
            name="name"
            autoComplete="name"
          />
          <Input
            className="input-showcase__input-example"
            label="Disabled"
            disabled
            id="disabled-showcase-input"
            value="This input is disabled"
          />
          <Input
            className="input-showcase__input-example"
            label="Error"
            id="error-showcase-input"
            errorHelperText="This is an error message"
          />
          <Input
            className="input-showcase__input-example"
            label="Long error message"
            id="long-error-showcase-input"
            errorHelperText="Long error message. This is a very long error message that will wrap to 
          a second line to test alignment"
          />
        </div>
        <div className="input-showcase__column-group showcase-item__example ">
          <Heading level={3}>Text areas</Heading>
          <TextArea
            label="Required text area"
            placeholder="Place holder text"
            required
            id="showcase-text-area-required"
          />
          <TextArea
            label="Text area with a helper text"
            helperText="This is a helper text"
            id="showcase-text-area-helper-text"
          />
          <TextArea label="Custom number of rows" rows={5} />
          <TextArea label="Number of characters limited to 5" maxLength={5} />
          <TextArea
            label="Focused text area"
            className="input-showcase__example--focused"
            id="focused-showcase-text-area"
          />
          <TextArea disabled label="Disabled text area" id="showcase-text-area-disabled" />
          <TextArea
            label="Text area with an error"
            errorHelperText="This is an error message"
            id="showcase-text-area-error"
          />
        </div>
        <div className="input-showcase__column-group showcase-item__example ">
          <Heading level={3}>Checkboxes</Heading>
          <Checkbox required label="Required checkbox" />
          <Checkbox
            label="Checkbox with long label. This is a very long label that will wrap to a second 
            line on smaller screens to test alignment"
          />
          <Checkbox label="Checkbox with helper text" helperText="This is a helper text" />
          <Checkbox defaultChecked label="Checked checkbox" />
          <Checkbox className="input-showcase__example--focused" label="Focused checkbox" />
          <Checkbox disabled label="Disabled checkbox" />
          <Checkbox disabled defaultChecked label="Checked disabled checkbox" />
          <Checkbox label="Checkbox with an error" errorHelperText="This is an error message" />
          <Checkbox
            defaultChecked
            label="Checked checkbox with an error"
            errorHelperText="This is an error message"
          />
        </div>
        <div className="input-showcase__column-group showcase-item__example ">
          <Heading level={3}>Radio</Heading>
          <Radio
            name="radio-test"
            label="Radio with long label. This is a very long label that will wrap to a second 
            line on smaller screens to test alignment"
          />
          <Radio
            name="radio-test"
            label="Radio with helper text"
            helperText="This is a helper text"
          />
          <Radio name="radio-test" defaultChecked label="Checked radio" />
          <Radio
            name="radio-test-2"
            className="input-showcase__example--focused"
            label="Focused radio"
          />
          <Radio name="radio-test-2" disabled label="Disabled radio" />
          <Radio name="radio-test-2" disabled defaultChecked label="Checked disabled radio" />
          <Radio
            name="radio-test-3"
            label="Radio with an error"
            errorHelperText="This is an error message"
          />
          <Radio
            name="radio-test-3"
            defaultChecked
            label="Checked radio with an error"
            errorHelperText="This is an error message"
          />
        </div>
      </div>
    </div>
  );
};
