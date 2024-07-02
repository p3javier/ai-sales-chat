import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { registerEmail } from "@/lib/services";
import { useJourneyStateStore } from "@/lib";

const FormSchema = z.object({
  email: z.string().email({
    message: "Username must be at least 2 characters.",
  }),
});

export function EmailForm() {
  const setJourneyState = useJourneyStateStore(
    (state) => state.setJourneyState
  );

  const handleStartClick = () => {
    setJourneyState({ introCompleted: true });
  };

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    const { email } = data;

    toast({
      title: "You submitted the following values:",
      description: email,
    });

    try {
      const response = await registerEmail(email);
      if (response.message === "Email registered") {
        return handleStartClick();
      }
      toast({
        title: "Ha ocurrido un error",
        description: response.message,
        variant: "destructive",
      });
    } catch (error) {
      console.error("Error registering email", error);
      toast({
        title: "Ha ocurrido un error",
        description: "Error registrando el email",
        variant: "destructive",
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Introduce tu email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" variant="secondary" className="mt-4">
          Enviar
        </Button>
      </form>
    </Form>
  );
}
