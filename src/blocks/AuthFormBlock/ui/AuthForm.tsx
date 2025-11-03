import { useState, useMemo, useEffect } from "react";
import { useForm } from "react-hook-form";
import { motion } from "motion/react";
import { Eye, EyeOff, Mail, Lock, User, ArrowRight } from "lucide-react";
import { 
  Form, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormControl, 
  FormMessage 
} from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/shared/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/shared/ui/card";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import asciiGif from "@/shared/images/ascii-animation.gif";

type Star = {
  top: number;
  left: number;
  size: number;
  opacity: number;
};

function StarField({ count = 640, clusterCount = 16 }: { count?: number; clusterCount?: number }) {
  const stars: Star[] = useMemo(() => {
    const centers = Array.from({ length: clusterCount }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      r: 6 + Math.random() * 7,
    }));
    const totalWeight = centers.reduce((sum, c) => sum + c.r, 0);
    const starsPerCluster = centers.map((c) => Math.max(12, Math.round((c.r / totalWeight) * count)));
    const result: Star[] = [];
    centers.forEach((c, idx) => {
      const n = starsPerCluster[idx];
      for (let i = 0; i < n; i++) {
        const angle = Math.random() * Math.PI * 2;
        const radius = c.r * Math.pow(Math.random(), 0.5);
        const jitter = (Math.random() - 0.5) * 2;
        let left = c.x + radius * Math.cos(angle) + jitter;
        let top = c.y + radius * Math.sin(angle) + jitter;
        left = Math.min(100, Math.max(0, left));
        top = Math.min(100, Math.max(0, top));
        const s = Math.random();
        const size = s < 0.9 ? 1 : s < 0.98 ? 2 : 3;
        const opacity = 0.8 + Math.random() * 0.2;
        result.push({ top, left, size, opacity });
      }
    });
    return result;
  }, [count, clusterCount]);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      {stars.map((s, i) => (
        <div
          key={i}
          className="bg-white rounded-full"
          style={{
            position: "absolute",
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            opacity: s.opacity,
          }}
        />
      ))}
    </div>
  );
}
interface LoginFormData {
  email: string;
  password: string;
}

interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export function AuthForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  // Звёзды теперь распределяются кластерами без привязки к центру

  // Анимация набора текста для заголовка на GIF
  const fullTitle = "Твой шаг\nв будущее";
  const [typedTitle, setTypedTitle] = useState("");
  useEffect(() => {
    let i = 0;
    const speed = 60; // мс на символ
    const timer = setInterval(() => {
      setTypedTitle(fullTitle.slice(0, i + 1));
      i += 1;
      if (i >= fullTitle.length) {
        clearInterval(timer);
      }
    }, speed);
    return () => clearInterval(timer);
  }, []);

  const loginForm = useForm<LoginFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const registerForm = useForm<RegisterFormData>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onLoginSubmit = (data: LoginFormData) => {
    console.log("Login data:", data);
    // Здесь будет логика входа
  };

  const onRegisterSubmit = (data: RegisterFormData) => {
    console.log("Register data:", data);
    // Здесь будет логика регистрации
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-4 relative">
      <StarField count={5000} clusterCount={80
      } />
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center relative z-10">
        {/* Левая часть - анимированный песель */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="hidden lg:flex items-center justify-center bg-gradient-to-br rounded-3xl overflow-hidden p-0 min-h-[600px] relative z-20"
        >
          <div className="w-full h-full">
            <ImageWithFallback
              src={asciiGif}
              alt="ASCII анимация"
              className="w-full h-full object-cover block"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <h2 className="text-white text-5xl text-center font-[Pixel] font-bold uppercase tracking-wide mb-15 drop-shadow-lg">
              {typedTitle.split("\n").map((line, idx, arr) => (
                <span key={idx}>
                  {line}
                  {idx < arr.length - 1 && <br />}
                </span>
              ))}
              <span className="ml-2 align-baseline blink font-thin">\</span>
            </h2>
          </div>
        </motion.div>

        {/* Правая часть - форма */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-md mx-auto"
        >
          <Card className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-xl border border-white/25 ring-1 ring-white/20 shadow-[0_0_40px_rgba(255,255,255,0.25)]">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl font-bold text-white">
                Аутентификация
              </CardTitle>
              <CardDescription className="text-white/70">
                Войдите в аккаунт или создайте новый
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <Tabs defaultValue="login" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6 bg-white border border-black rounded-md overflow-hidden">
                  <TabsTrigger value="login" className="text-sm text-black data-[state=active]:bg-black data-[state=active]:text-white">
                    Вход
                  </TabsTrigger>
                  <TabsTrigger value="register" className="text-sm text-black data-[state=active]:bg-black data-[state=active]:text-white">
                    Регистрация
                  </TabsTrigger>
                </TabsList>

                {/* Форма входа */}
                <TabsContent value="login" className="space-y-4">
                  <Form {...loginForm}>
                    <form onSubmit={loginForm.handleSubmit(onLoginSubmit)} className="space-y-4">
                      <FormField
                        name="email"
                        control={loginForm.control}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-black">Email</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black/60 w-4 h-4" />
                                <Input 
                                  {...field} 
                                  type="email"
                                  placeholder="Введите ваш email"
                                  className="pl-10 h-12 bg-white text-black placeholder:text-black/50 border-black focus:border-black focus:ring-0"
                                />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        name="password"
                        control={loginForm.control}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-black">Пароль</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black/60 w-4 h-4" />
                                <Input 
                                  {...field} 
                                  type={showPassword ? "text" : "password"}
                                  placeholder="Введите пароль"
                                  className="pl-10 pr-10 h-12 bg-white text-black placeholder:text-black/50 border-black focus:border-black focus:ring-0"
                                />
                                <button
                                  type="button"
                                  onClick={() => setShowPassword(!showPassword)}
                                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black/60 hover:text-black"
                                >
                                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                </button>
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center gap-2 text-black/70">
                          <input type="checkbox" className="rounded" />
                          Запомнить меня
                        </label>
                        <a href="#" className="text-black underline hover:text-black">
                          Забыли пароль?
                        </a>
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full h-12 bg-black text-white hover:bg-white hover:text-black border border-black transition-colors"
                      >
                        Войти
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </form>
                  </Form>
                </TabsContent>

                {/* Форма регистрации */}
                <TabsContent value="register" className="space-y-4">
                  <Form {...registerForm}>
                    <form onSubmit={registerForm.handleSubmit(onRegisterSubmit)} className="space-y-4">
                      <FormField
                        name="name"
                        control={registerForm.control}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-black">Имя</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black/60 w-4 h-4" />
                                <Input 
                                  {...field} 
                                  placeholder="Введите ваше имя"
                                  className="pl-10 h-12 bg-white text-black placeholder:text-black/50 border-black focus:border-black focus:ring-0"
                                />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        name="email"
                        control={registerForm.control}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-black">Email</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black/60 w-4 h-4" />
                                <Input 
                                  {...field} 
                                  type="email"
                                  placeholder="Введите ваш email"
                                  className="pl-10 h-12 bg-white text-black placeholder:text-black/50 border-black focus:border-black focus:ring-0"
                                />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        name="password"
                        control={registerForm.control}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-black">Пароль</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black/60 w-4 h-4" />
                                <Input 
                                  {...field} 
                                  type={showPassword ? "text" : "password"}
                                  placeholder="Создайте пароль"
                                  className="pl-10 pr-10 h-12 bg-white text-black placeholder:text-black/50 border-black focus:border-black focus:ring-0"
                                />
                                <button
                                  type="button"
                                  onClick={() => setShowPassword(!showPassword)}
                                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black/60 hover:text-black"
                                >
                                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                </button>
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        name="confirmPassword"
                        control={registerForm.control}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-black">Подтвердите пароль</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black/60 w-4 h-4" />
                                <Input 
                                  {...field} 
                                  type={showConfirmPassword ? "text" : "password"}
                                  placeholder="Повторите пароль"
                                  className="pl-10 pr-10 h-12 bg-white text-black placeholder:text-black/50 border-black focus:border-black focus:ring-0"
                                />
                                <button
                                  type="button"
                                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black/60 hover:text-black"
                                >
                                  {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                </button>
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="text-sm text-black/70">
                        <label className="flex items-start gap-2">
                          <input type="checkbox" className="rounded mt-1" />
                          <span>
                            Я согласен с{" "}
                            <a href="#" className="text-black underline hover:text-black">
                              условиями использования
                            </a>{" "}
                            и{" "}
                            <a href="#" className="text-black underline hover:text-black">
                              политикой конфиденциальности
                            </a>
                          </span>
                        </label>
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full h-12 bg-black text-white hover:bg-white hover:text-black border border-black transition-colors"
                      >
                        Зарегистрироваться
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </form>
                  </Form>
                </TabsContent>
              </Tabs>

              {/* Дополнительные опции */}
              <div className="mt-6 pt-6 border-t border-black">
                <div className="text-center text-sm text-black/70 mb-4">
                  или войдите через
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" className="h-12 border-black text-black hover:bg-black hover:text-white">
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    Google
                  </Button>
                  <Button variant="outline" className="h-12 border-black text-black hover:bg-black hover:text-white">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    Facebook
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}