import { useForm } from "react-hook-form"
import {Form, FormField, FormItem, FormLabel, FormControl, FormMessage} from "@/shared//ui"
import { Button } from "@/shared/ui"


export function RegistrationBlock() {

    const form = useForm({
        defaultValues: {
            name: "",
            email: "",  
            password: "",
        },
    });

    return (
        <div className="">
            <Form {...form}>
                <form className="space-y-4">
                    <FormField
                    name="name"
                    control={form.control}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Имя</FormLabel>
                            <FormControl>
                                <input {...field}/>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                    />
                    <Button variant={"outline"}>Зарегистрироваться</Button>
                </form>
            </Form>
        </div>
    )
}
