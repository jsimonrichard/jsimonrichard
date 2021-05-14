import { useState, createRef } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';

function onSubmit(data) {
    
}

export default function ContentForm() {
    const { register, handleSubmit, errors } = useForm();
    console.log(errors);

    let [isLoading, setLoading] = useState(false);
    let recaptchaRef = createRef();

    let onSubmit = (data) => {
        if(recaptchaRef.current.getValue()) {
            const service_id = "service_6gdy3yv";
            const template_id = "template_jsrw1d3";
            const user_id = "user_nnmvkZk8RnT1RpeoxW5AR";

            this.setState({isLoading: true});

            emailjs.send(service_id, template_id, {
                "user_name": this.state.name,
                "email": this.state.email,
                "message": this.state.message,

            }, user_id).then((response) => {
                this.setState({isLoading: false});
            }, (err) => {
                console.log(err);
                this.setState({isLoading: false});

                alert("The mail client had a problem. Try emailing directly instead.");
            });
        } else {
            // Except no captcha
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="Name" name="Name" ref={register({required: true, maxLength: 80})} className="p-4 rounded-lg" />
            <input type="text" placeholder="Email" name="Email" ref={register({required: true, pattern: /^\S+@\S+\.\S+$/i})} className="p-4 rounded-lg" />
            <textarea name="Message" placeholder="Message" ref={register({required: true})} className="col-span-2 p-4 rounded-lg"/>

            <ReCAPTCHA 
                ref={recaptchaRef}
                sitekey="6Lfl01IaAAAAADQresrgnV4SLqi5JTOkeXh14kuw"/>

            <input type="submit" name="Send" className="bg-blue-500 text-white rounded-lg"/>
        </form>
    );
}