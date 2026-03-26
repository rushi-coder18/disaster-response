import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, Shield, ArrowRight, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const navigate = useNavigate();

  const formatPhoneNumber = (value: string) => {
    const digits = value.replace(/\D/g, "");
    return digits.slice(0, 10);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(formatPhoneNumber(e.target.value));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (phoneNumber.length !== 10) {
      toast.error("Please enter a valid 10-digit mobile number");
      return;
    }

    setIsLoading(true);
    
    // Simulate verification
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsVerified(true);
    toast.success("Successfully registered! You will receive emergency alerts.");
    
    // Store in localStorage for demo
    localStorage.setItem("userPhone", phoneNumber);
    
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <Layout>
      <div className="min-h-[calc(100vh-80px)] flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md">
          {/* Card */}
          <div className="bg-card rounded-2xl border border-border card-shadow p-8 md:p-10">
            {!isVerified ? (
              <>
                {/* Header */}
                <div className="text-center mb-8">
                  <div className="inline-flex p-4 rounded-2xl bg-primary/10 mb-4">
                    <Shield className="w-10 h-10 text-primary" />
                  </div>
                  <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    Emergency Registration
                  </h1>
                  <p className="text-muted-foreground">
                    Enter your mobile number to receive disaster alerts and emergency notifications
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Mobile Number
                    </label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 text-muted-foreground">
                        <Phone className="w-5 h-5" />
                        <span className="font-medium">+91</span>
                      </div>
                      <Input
                        type="tel"
                        value={phoneNumber}
                        onChange={handlePhoneChange}
                        placeholder="Enter 10-digit number"
                        className="pl-24 h-14 text-lg font-medium"
                        maxLength={10}
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      We'll use this number for emergency alerts only
                    </p>
                  </div>

                  <Button
                    type="submit"
                    variant="default"
                    size="xl"
                    className="w-full gap-2"
                    disabled={isLoading || phoneNumber.length !== 10}
                  >
                    {isLoading ? (
                      <span className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin"></div>
                        Verifying...
                      </span>
                    ) : (
                      <>
                        Register for Alerts
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </Button>
                </form>

                {/* Features */}
                <div className="mt-8 pt-8 border-t border-border">
                  <p className="text-sm font-medium text-foreground mb-4 text-center">
                    What you'll receive:
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Real-time disaster alerts for your area",
                      "Evacuation route notifications",
                      "Rescue team location updates",
                      "Safety guidelines during emergencies",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start gap-3 text-sm">
                        <CheckCircle className="w-5 h-5 text-safe shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            ) : (
              /* Success State */
              <div className="text-center py-8 fade-in">
                <div className="inline-flex p-5 rounded-full bg-safe/10 mb-6">
                  <CheckCircle className="w-14 h-14 text-safe" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Registration Complete!
                </h2>
                <p className="text-muted-foreground mb-4">
                  Your number <strong className="text-foreground">+91 {phoneNumber}</strong> has been registered for emergency alerts.
                </p>
                <p className="text-sm text-muted-foreground">
                  Redirecting to home page...
                </p>
              </div>
            )}
          </div>

          {/* Bottom Note */}
          <p className="text-center text-xs text-muted-foreground mt-6">
            No password required. Your privacy is protected.
            <br />
            We only use your number for emergency communications.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
