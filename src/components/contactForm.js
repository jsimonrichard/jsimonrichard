import { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';

function Input(props) {
  return (
    <input
      type="text"
      className={"p-2 rounded-lg border-2 " +
                 (props.register.name in props.errors ? "border-red-500" : "")}
      placeholder={props.placeholder}
      {...props.register}/>
  );
}

function TextArea(props) {
  return (
    <textarea
      className={"col-span-2 p-2 rounded-lg border-2 " + 
                  (props.register.name in props.errors ? "border-red-500" : "")}
      placeholder={props.placeholder}
      {...props.register}/>
  );
}

export default function ContentForm(props) {
  const { register, handleSubmit, formState: { errors }  } = useForm();

  const [isLoading, setLoading] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const onSubmit = data => {
    setLoading(true);
    if(isVerified) {
      const service_id = "service_6gdy3yv";
      const template_id = "template_jsrw1d3";
      const user_id = "user_nnmvkZk8RnT1RpeoxW5AR";

      emailjs.send(service_id, template_id, {
        user_name: data.name,
        user_email: data.email,
        message: data.message,
        site_name: "jsimonrichard.com"
      }, user_id).then(() => {
          setLoading(false);
      }, (err) => {
          console.log(err);
          setLoading(false);
          alert("The mail client had a problem. Try emailing directly instead.");
      });
    } else {
      alert("Please submit the ReCAPTCHA");
      setLoading(false);
    }
  }

  return (
    <div {...props}>
      <h2 className="text-xl font-bold mb-2">Contact Me</h2>
      <form id="contact-form"
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col md:grid md:grid-cols-2 gap-2">

        <Input placeholder="Name" errors={errors}
          register={register("name", {required: true, maxLength: 80})} />
 
        <Input placeholder="Email" errors={errors}
          register={register("email", {required: true, pattern: /^\S+@\S+\.\S+$/i})} />
        
        <TextArea placeholder="Message" errors={errors}
          register={register("message", {required: true})} />

        <ReCAPTCHA
            sitekey="6Lfl01IaAAAAADQresrgnV4SLqi5JTOkeXh14kuw"
            onChange={value=>{
              setIsVerified(!!value);
            }}/>

        <button type="submit" name="send"
          className="bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 p-4 text-white rounded-lg">
          {isLoading ? <span>Loading...</span> : <span>Send</span>}
        </button>
      </form>
      Alternatively, you can email me at <a href="mailto: jsimonrichard@gmail.com">jsimonrichard@gmail.com</a>
    </div>
  );
}