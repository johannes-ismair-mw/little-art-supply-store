import './FeedbackSection.css';

/*
TODO: Improve the following FeedbackSection component by:
 - Using landmark regions
 - Using the correct HTML elements for the different parts of the section
 - Adding the missing aria attributes
 - Adding live regions for the feedback form
 - Validating the form fields
 - Adding styles as you like
*/

export const FeedbackSection = () => {
  return (
    <div className="feedback-container">
      <p>
        To go back to the beginning click <a href="#">here</a>.
      </p>
      <p>Please give us some feedback:</p>
      <textarea></textarea>
      <div>
        Name: <input id="first-name" /> <input id="last-name" />
      </div>
      <p>
        Solve the following math problem to prove you are not a robot: 2 + 2 =
        <input id="captcha" type="number" />
      </p>

      <div>
        <a className="button" id="send-feedback-button">
          Send Feedback
        </a>
        <p className="microcopy">(required fields are outlined purple)</p>
      </div>
    </div>
  );
};
