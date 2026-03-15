import { Link } from 'react-router';
import { TrendingUp, Building2, User, Mail, Phone, DollarSign, FileText, Upload, Briefcase } from 'lucide-react';
import { useState } from 'react';

export function FormPage() {
  const [formData, setFormData] = useState({
    // Personal Details
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    
    // Venture Details
    companyName: '',
    website: '',
    industry: '',
    stage: '',
    description: '',
    
    // Funding Details
    fundingAmount: '',
    category: '',
    useOfFunds: '',
    
    // Document Upload
    pitchDeck: null as File | null,
    businessPlan: null as File | null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, [fieldName]: e.target.files![0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-semibold text-gray-900">VentureCapital</span>
            </Link>
            <Link 
              to="/login" 
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Already have an account? <span className="text-blue-600">Sign in</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 py-12 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
              Application Form
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-3">
              Apply for Venture Funding
            </h1>
            <p className="text-lg text-gray-600">
              Fill out the form below to submit your venture application
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-10">
              {/* Personal Details Section */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                    <User className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">Personal Details</h2>
                    <p className="text-sm text-gray-600">Tell us about yourself</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 placeholder:text-gray-400"
                      placeholder="John"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 placeholder:text-gray-400"
                      placeholder="Doe"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 placeholder:text-gray-400"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Phone className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 placeholder:text-gray-400"
                        placeholder="+1 (555) 123-4567"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Venture Details Section */}
              <div className="border-t border-gray-200 pt-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">Venture Details</h2>
                    <p className="text-sm text-gray-600">Information about your business</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name *
                    </label>
                    <input
                      id="companyName"
                      name="companyName"
                      type="text"
                      value={formData.companyName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 placeholder:text-gray-400"
                      placeholder="Your Company Inc."
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">
                      Website
                    </label>
                    <input
                      id="website"
                      name="website"
                      type="url"
                      value={formData.website}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 placeholder:text-gray-400"
                      placeholder="https://yourcompany.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2">
                      Industry *
                    </label>
                    <select
                      id="industry"
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 bg-white"
                      required
                    >
                      <option value="">Select an industry</option>
                      <option value="fintech">FinTech</option>
                      <option value="healthtech">HealthTech</option>
                      <option value="saas">SaaS</option>
                      <option value="ecommerce">E-Commerce</option>
                      <option value="ai">AI/Machine Learning</option>
                      <option value="cleantech">CleanTech</option>
                      <option value="edtech">EdTech</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="stage" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Stage *
                    </label>
                    <select
                      id="stage"
                      name="stage"
                      value={formData.stage}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 bg-white"
                      required
                    >
                      <option value="">Select stage</option>
                      <option value="idea">Idea Stage</option>
                      <option value="prototype">Prototype</option>
                      <option value="mvp">MVP</option>
                      <option value="early-revenue">Early Revenue</option>
                      <option value="growth">Growth Stage</option>
                      <option value="scaling">Scaling</option>
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                      Venture Description *
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none text-gray-900 placeholder:text-gray-400"
                      placeholder="Describe your business model, target market, and competitive advantage..."
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Funding Details Section */}
              <div className="border-t border-gray-200 pt-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">Funding Details</h2>
                    <p className="text-sm text-gray-600">Specify your funding requirements</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fundingAmount" className="block text-sm font-medium text-gray-700 mb-2">
                      Funding Amount Sought *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-gray-500">$</span>
                      </div>
                      <input
                        id="fundingAmount"
                        name="fundingAmount"
                        type="text"
                        value={formData.fundingAmount}
                        onChange={handleChange}
                        className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 placeholder:text-gray-400"
                        placeholder="500,000"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                      Funding Category *
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 bg-white"
                      required
                    >
                      <option value="">Select category</option>
                      <option value="seed">Seed Funding</option>
                      <option value="series-a">Series A</option>
                      <option value="series-b">Series B</option>
                      <option value="series-c">Series C+</option>
                      <option value="bridge">Bridge Financing</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="useOfFunds" className="block text-sm font-medium text-gray-700 mb-2">
                      Use of Funds *
                    </label>
                    <textarea
                      id="useOfFunds"
                      name="useOfFunds"
                      value={formData.useOfFunds}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none text-gray-900 placeholder:text-gray-400"
                      placeholder="Explain how you plan to use the funding (e.g., product development, marketing, hiring)..."
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Document Upload Section */}
              <div className="border-t border-gray-200 pt-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">Document Upload</h2>
                    <p className="text-sm text-gray-600">Upload your pitch deck and business plan</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="pitchDeck" className="block text-sm font-medium text-gray-700 mb-2">
                      Pitch Deck (PDF) *
                    </label>
                    <div className="relative border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-blue-400 transition-all bg-gray-50">
                      <div className="text-center">
                        <Upload className="mx-auto h-10 w-10 text-gray-400 mb-3" />
                        <label
                          htmlFor="pitchDeck"
                          className="cursor-pointer text-sm font-medium text-blue-600 hover:text-blue-700"
                        >
                          <span>Upload file</span>
                          <input
                            id="pitchDeck"
                            name="pitchDeck"
                            type="file"
                            accept=".pdf"
                            onChange={(e) => handleFileChange(e, 'pitchDeck')}
                            className="sr-only"
                            required
                          />
                        </label>
                        <p className="text-xs text-gray-500 mt-1">PDF up to 10MB</p>
                        {formData.pitchDeck && (
                          <p className="text-sm text-green-600 mt-2">
                            ✓ {formData.pitchDeck.name}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="businessPlan" className="block text-sm font-medium text-gray-700 mb-2">
                      Business Plan (PDF)
                    </label>
                    <div className="relative border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-blue-400 transition-all bg-gray-50">
                      <div className="text-center">
                        <Upload className="mx-auto h-10 w-10 text-gray-400 mb-3" />
                        <label
                          htmlFor="businessPlan"
                          className="cursor-pointer text-sm font-medium text-blue-600 hover:text-blue-700"
                        >
                          <span>Upload file</span>
                          <input
                            id="businessPlan"
                            name="businessPlan"
                            type="file"
                            accept=".pdf"
                            onChange={(e) => handleFileChange(e, 'businessPlan')}
                            className="sr-only"
                          />
                        </label>
                        <p className="text-xs text-gray-500 mt-1">PDF up to 10MB</p>
                        {formData.businessPlan && (
                          <p className="text-sm text-green-600 mt-2">
                            ✓ {formData.businessPlan.name}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Terms and Submit */}
              <div className="border-t border-gray-200 pt-8">
                <label className="flex items-start gap-3 mb-6">
                  <input
                    type="checkbox"
                    className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-0.5"
                    required
                  />
                  <span className="text-sm text-gray-600 leading-relaxed">
                    I agree to the{' '}
                    <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                      Terms and Conditions
                    </a>
                    {' '}and{' '}
                    <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                      Privacy Policy
                    </a>
                    . I understand that all information provided will be kept confidential.
                  </span>
                </label>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    className="flex-1 bg-blue-600 text-white py-3.5 px-6 rounded-lg hover:bg-blue-700 transition-all font-medium shadow-sm"
                  >
                    Submit Application
                  </button>
                  <Link
                    to="/"
                    className="flex-1 border-2 border-gray-300 text-gray-700 py-3.5 px-6 rounded-lg hover:bg-gray-50 transition-all text-center font-medium"
                  >
                    Cancel
                  </Link>
                </div>
              </div>
            </form>
          </div>

          {/* Help Section */}
          <div className="mt-8 text-center text-sm text-gray-600">
            <p>
              Need help with your application?{' '}
              <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                Contact our support team
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
