# **MediLink - Appointment Booking Application**

MediLink is a full-stack Appointment Booking Application built using the **MERN stack (MongoDB, Express.js, React.js, Node.js)**. It streamlines the process of scheduling and managing medical appointments, offering users, doctors, and admins a secure and user-friendly platform. It provides a robust and comprehensive solution to efficiently manage and improve the healthcare management process. 

The platform caters to three types of users: 
- **User (Patients)**: Browse available doctors, book appointments, and manage their bookings seamlessly.
- **Doctor**: Manage patient appointments, view schedules, and update availability for consultations.
- **Admin**: Oversee platform operations, manage users and doctors, and ensure smooth functioning of the system.



## **Live Demo**

You can access the live version of the project using the following link:

- [MediLink - User](https://medilink-frontend-lau6.onrender.com)
- [MediLink - Admin/Doctor](https://medilink-admin.onrender.com)




## Features  

### **User (Patient) Features**

- **Registration and Login**: User can register and login securely.
  
- **Search and Filter Doctors**: Users can find suitable doctors based on specialization, location, and availability.
  
- **Book Appointments**: Easy scheduling with preferred doctors.
  
- **Profile Management**: Users can maintain and update their personal details for accurate record-keeping.
  
- **Payment Flexibility**: Integration with Stripe and Razorpay allows users to make secure online payments, catering to diverse payment preferences.
  
- **Appointment History**: Users can view and manage past and upcoming appointments, providing transparency and control.

### **Doctor Features**

- **Manage Appointments**: Doctors can view and handle their schedules efficiently.
  
- **Profile Updates**: They can update their professional information and availability, ensuring patients always see accurate data.
  
- **Dashboard Analytics**: A personalized dashboard provides insights into their earnings, number of patients, and total appointments, enabling better decision-making and performance tracking.

### **Admin Features**

- **Doctor Management**: Admins can onboard new doctors, update their details, or remove them as needed.
  
- **Appointment Oversight**: Admins can view and manage all appointments on the platform, resolving any disputes or issues.
  
- **System Monitoring**: Admins maintain a bird's-eye view of all users, ensuring the system remains reliable and user-friendly.




## Technology Stack 

### Frontend:

- **React.js**: The user interface is built with React.js, allowing for a fast, responsive, and interactive experience. React’s component-based structure is ideal for organizing the UI and ensuring reusability of components.
- **State Management**: State is managed using React hooks, ensuring smooth data flow and minimizing unnecessary re-renders.
- **HTML & TailwindCSS**: For structuring and styling the application. 

### Backend:

- **Node.js & Express.js**: The backend is built using Express.js, which handles API requests like user registration, appointment booking, doctor management, etc.
- **Authentication**: JWT tokens are used for securing routes, ensuring that only authorized users (patients, doctors, and admins) can access their respective functionalities.
- **MongoDB**: MongoDB is used as the database to store user data, doctor profiles, appointment details, and payment information.


### Payment Integration:

- **Stripe/Razorpay**: The payment gateway integration allows users to make payments for their appointments via Stripe or Razorpay, and the system securely processes these transactions.

### Security:

- **JWT & Bcrypt**: The system uses bcrypt to hash passwords and JWT for secure, token-based authentication. The app follows best practices for data validation to protect against security vulnerabilities.



## **Flow Summary**

### **User Workflow**

- Register and log in.
- Search for doctors based on specialty and availability.
- Book an appointment and make payments securely.
- View and manage appointment history.

### **Doctor Workflow**

- Log in to access the dashboard.
- Set availability and manage appointments.
- View earnings and patient details.

### **Admin Workflow**

- Log in to manage doctor profiles and appointments.
- View system-wide reports and analytics.
