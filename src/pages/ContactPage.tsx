import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, Check as CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue } from
"@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

const ContactPage = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormState((prev) => ({ ...prev, inquiryType: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        inquiryType: ""
      });
    }, 1500);
  };

  return (
    <div className="pt-24 pb-20 bg-primary-900 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-[url('/images/contact-hero.jpg')] bg-cover bg-center py-20">
        <div className="absolute inset-0 bg-primary-900/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="heading-xl mb-6">Contact Us</h1>
            <p className="text-xl text-foreground/90 mb-8">
              Have questions about our expeditions or services? Get in touch with our team and we'll be happy to assist you.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Info & Form Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              <div>
                <h2 className="heading-md mb-6">Get In Touch</h2>
                <p className="text-foreground/80 mb-6">
                  Whether you're interested in joining an expedition, need information about our services, or want to discuss a potential collaboration, our team is here to help.
                </p>
              </div>
              
              <Card className="bg-primary-800 border-primary-700">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-accent/20 p-2 rounded-full">
                      <MapPin className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold mb-1">Our Location</h3>
                      <p className="text-sm text-foreground/80">
                        123 Ocean Drive<br />
                        Marina Bay<br />
                        San Francisco, CA 94111<br />
                        United States
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-primary-800 border-primary-700">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-secondary/20 p-2 rounded-full">
                      <Phone className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold mb-1">Phone</h3>
                      <p className="text-sm text-foreground/80">
                        Main Office: +1 (555) 123-4567<br />
                        Expedition Inquiries: +1 (555) 987-6543<br />
                        International: +1 (555) 456-7890
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-primary-800 border-primary-700">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-accent/20 p-2 rounded-full">
                      <Mail className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold mb-1">Email</h3>
                      <p className="text-sm text-foreground/80">
                        General Inquiries: info@marianasgold.com<br />
                        Expeditions: expeditions@marianasgold.com<br />
                        Media: media@marianasgold.com
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-primary-800 border-primary-700">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-secondary/20 p-2 rounded-full">
                      <Clock className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold mb-1">Office Hours</h3>
                      <p className="text-sm text-foreground/80">
                        Monday - Friday: 9:00 AM - 6:00 PM (PST)<br />
                        Saturday: 10:00 AM - 2:00 PM (PST)<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-primary-800 border-primary-700">
              <CardContent className="p-8">
                <h2 className="heading-md mb-6">Send Us a Message</h2>
                
                {isSubmitted ?
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-success/20 border border-success/30 rounded-lg p-6 text-center">

                    <div className="flex justify-center mb-4">
                      <CheckCircle className="h-12 w-12 text-success" />
                    </div>
                    <h3 className="font-display text-xl font-semibold mb-2">Message Sent Successfully!</h3>
                    <p className="text-foreground/80 mb-4">
                      Thank you for contacting Mariana's Gold Expeditions. Our team will review your message and get back to you shortly.
                    </p>
                    <Button
                    variant="outline"
                    className="border-success text-success hover:bg-success hover:text-success-foreground"
                    onClick={() => setIsSubmitted(false)}>

                      Send Another Message
                    </Button>
                  </motion.div> :

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        className="bg-primary-700 border-primary-600" />

                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                        className="bg-primary-700 border-primary-600" />

                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number (Optional)</Label>
                        <Input
                        id="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 123-4567"
                        className="bg-primary-700 border-primary-600" />

                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="inquiryType">Inquiry Type</Label>
                        <Select value={formState.inquiryType} onValueChange={handleSelectChange} required>
                          <SelectTrigger className="bg-primary-700 border-primary-600">
                            <SelectValue placeholder="Select inquiry type" />
                          </SelectTrigger>
                          <SelectContent className="bg-primary-700 border-primary-600">
                            <SelectItem value="expedition">Expedition Inquiry</SelectItem>
                            <SelectItem value="services">Professional Services</SelectItem>
                            <SelectItem value="equipment">Equipment Rental</SelectItem>
                            <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                            <SelectItem value="media">Media Request</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      placeholder="Subject of your message"
                      required
                      className="bg-primary-700 border-primary-600" />

                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Please provide details about your inquiry..."
                      rows={6}
                      required
                      className="bg-primary-700 border-primary-600 resize-none" />

                    </div>
                    
                    <Button
                    type="submit"
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/80"
                    disabled={isSubmitting}>

                      {isSubmitting ?
                    <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending Message...
                        </span> :

                    <span className="flex items-center">
                          <Send className="mr-2 h-5 w-5" /> Send Message
                        </span>
                    }
                    </Button>
                  </form>
                }
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="heading-md mb-6">Our Location</h2>
        <div className="aspect-[16/9] bg-primary-800 rounded-lg overflow-hidden relative">
          <div className="absolute inset-0 map-grid"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-lg text-foreground/70">Interactive map loading...</p>
          </div>
          {/* Map would be implemented here with a mapping library */}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-primary-800 rounded-lg p-8">
          <h2 className="heading-md mb-6 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-display text-xl font-semibold mb-3">How quickly can I expect a response?</h3>
              <p className="text-foreground/80 mb-6">
                We aim to respond to all inquiries within 24-48 business hours. For urgent matters related to active expeditions, please call our emergency contact number.
              </p>
              
              <h3 className="font-display text-xl font-semibold mb-3">Do you offer virtual consultations?</h3>
              <p className="text-foreground/80 mb-6">
                Yes, we offer virtual consultations via video conference for clients who cannot visit our office in person. These can be scheduled through our online booking system.
              </p>
            </div>
            
            <div>
              <h3 className="font-display text-xl font-semibold mb-3">Can I visit your facility?</h3>
              <p className="text-foreground/80 mb-6">
                We welcome visitors to our headquarters by appointment only. Please contact us at least 48 hours in advance to schedule a tour of our facilities.
              </p>
              
              <h3 className="font-display text-xl font-semibold mb-3">How do I apply for a job or internship?</h3>
              <p className="text-foreground/80 mb-6">
                Please send your resume and cover letter to careers@marianasgold.com. Be sure to specify the position you're interested in and your availability in the subject line.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>);

};

export default ContactPage;