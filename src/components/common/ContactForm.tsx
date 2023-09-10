import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
type Inputs = {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
};
const validationSchema = Yup.object({
  name: Yup.string()
    .required('Name is required.')
    .matches(/^[a-zA-z]/, { message: 'Name  must be letters.' }),
  email: Yup.string()
    .required('Email is required.')
    .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, {
      message: 'Please enter a valid email address'
    }),
  company: Yup.string()
    .required('Company is required.')
    .matches(/^[a-zA-z]/, { message: 'Company name must be letters.' }),
  message: Yup.string()
    .required('Message is required')
    .matches(/^[a-zA-z]/, { message: 'Message  must contain letters.' }),
  phone: Yup.string()
    .required('Phone is required.')
    .matches(/^\d{10}$/, { message: 'Phone number must be 10 digit' })
});
const ContactForm: FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<Inputs>({
    resolver: yupResolver(validationSchema)
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log('form data', data);
  };
  console.log('form error', errors);
  return (
    <form className="contact-form needs-validation mb-20 " onSubmit={handleSubmit(onSubmit)}>
      <div className="messages"></div>
      <div className="row gx-4">
        <div className="col-md-6">
          <div className="form-floating mb-4">
            <input
              {...register('name')}
              type="text"
              name="name"
              id="form_name"
              placeholder="Jane"
              className={`form-control ${errors.name?.message ? 'is-invalid' : ''}`}
            />
            <label htmlFor="form_name"> Name *</label>
            {/* <div className="valid-feedback"> Looks good! </div> */}
            {errors.name?.message && <div className="invalid-feedback text-danger"> {errors.name?.message} </div>}
          
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-floating mb-4">
            <input
              {...register('email')}
              type="text"
              name="email"
              placeholder="jhon@gamil.com"
              id="form_email"
              className={`form-control ${errors.email?.message ? 'is-invalid' : ''}`}
            />
            <label htmlFor="form_email"> Email *</label>
            {errors.email?.message && <div className="invalid-feedback text-danger"> {errors.email?.message} </div>}
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-floating mb-4">
            <input
              {...register('company')}
              type="text"
              name="company"
              id="form_comapny"
              className={`form-control ${errors.company?.message ? 'is-invalid' : ''}`}
              placeholder="i.e webpatriot.com"
            />
            <label htmlFor="form_comapny">Company / Organization *</label>
            {errors.company?.message && <div className="invalid-feedback text-danger"> {errors.company?.message} </div>}
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-floating mb-4">
            <input
              {...register('phone')}
              type="text"
              name="phone"
              id="form_phone"
              className={`form-control ${errors.phone?.message ? 'is-invalid' : ''}`}
              placeholder="jane.doe@example.com"
            />
            <label htmlFor="form_phone"> Phone *</label>
            {errors.phone?.message && <div className="invalid-feedback text-danger"> {errors.phone?.message} </div>}
          </div>
        </div>

        <div className="col-12">
          <div className="form-floating mb-4">
            <textarea
              {...register('message')}
              name="message"
              id="form_message"
              className={`form-control ${errors.message?.message ? 'is-invalid' : ''}`}
              placeholder="Query"
              style={{ height: 150 }}
            />

            <label htmlFor="form_message"> Query *</label>
            {errors.message?.message && <div className="invalid-feedback text-danger"> {errors.message?.message} </div>}
          </div>
        </div>

        <div className="col-12 text-center">
          <input type="submit" value="Send message" className="btn btn-primary rounded-pill btn-send mb-3" />
          <p className="text-muted">
            <strong>*</strong> These fields are required.
          </p>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;