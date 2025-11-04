import { useState, useMemo, useEffect } from "react";
import { useForm } from "react-hook-form";
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
import GoogleLogo from "@/shared/images/google.png";
import TelegramIcon from "@/shared/images/telegram.png";


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
  const [activeTab, setActiveTab] = useState("login");
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
    <div className="min-h-screen flex items-center justify-center bg-black p-4 relative overflow-hidden">
      <StarField count={5000} clusterCount={80
      } />
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center relative z-10">
        {/* Левая часть - анимированный песель */}
        <div
          className="hidden lg:flex items-center justify-center bg-gradient-to-br rounded-3xl overflow-hidden p-0 min-h-[600px] relative z-20"
        >
          <div className="w-full h-full relative">
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
        </div>

        {/* Правая часть - форма */}
        <div className="relative z-20 flex items-center justify-center">
          <Card variant='glasspixel' className="w-full max-w-md">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-3xl font-bold text-white font-[Pixel]">
                Аутентификация
              </CardTitle>
              <CardDescription className="text-white/70 font-[Pixel]">
                Войдите в аккаунт или создайте новый
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <Tabs defaultValue="login" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6 bg-white border border-black rounded-xl overflow-hidden h-auto">
                  <TabsTrigger value="login" className="text-md text-black data-[state=active]:bg-black data-[state=active]:text-white font-[Pixel]">
                    Вход
                  </TabsTrigger>
                  <TabsTrigger value="register" className="text-sm text-black data-[state=active]:bg-black data-[state=active]:text-white font-[Pixel]">
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
                            <FormLabel className="text-white font-[Pixel]">Email</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black/60 w-4 h-4" />
                                <Input 
                                  {...field} 
                                  type="email"
                                  placeholder="Введите ваш email"
                                  className="pl-10 h-12 font-[Pixel] bg-white text-black placeholder:text-black/50 border-black focus:border-black focus:ring-0"
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
                            <FormLabel className="text-white font-[Pixel]">Пароль</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black/60 w-4 h-4" />
                                <Input 
                                  {...field} 
                                  type={showPassword ? "text" : "password"}
                                  placeholder="Введите пароль"
                                  className="pl-10 pr-10 h-12 font-[Pixel] bg-white text-black placeholder:text-black/50 border-black focus:border-black focus:ring-0"
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
                        <label className="flex items-center gap-2 text-white/90 font-[Pixel]">
                          <input type="checkbox" className="rounded" />
                          Запомнить меня
                        </label>
                        <a href="#" className="text-white/90 font-[Pixel] underline hover:text-cyan-500">
                          Забыли пароль?
                        </a>
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full h-12 bg-cyan-500 text-white hover:bg-white hover:text-black border border-black transition-colors font-[Pixel]"
                      >
                        Войти
                        <ArrowRight className="w-5 h-5 ml-2" style={{ animation: 'bounce-right 2s infinite' }} />
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
                            <FormLabel className="text-white font-[Pixel]">Имя</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black/60 w-4 h-4" />
                                <Input 
                                  {...field} 
                                  placeholder="Введите ваше имя"
                                  className="pl-10 h-12 font-[Pixel] bg-white text-black placeholder:text-black/50 border-black focus:border-black focus:ring-0"
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
                            <FormLabel className="text-white font-[Pixel]">Email</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black/60 w-4 h-4" />
                                <Input 
                                  {...field} 
                                  type="email"
                                  placeholder="Введите ваш email"
                                  className="pl-10 h-12 font-[Pixel] bg-white text-black placeholder:text-black/50 border-black focus:border-black focus:ring-0"
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
                            <FormLabel className="text-white font-[Pixel]">Пароль</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black/60 w-4 h-4" />
                                <Input 
                                  {...field} 
                                  type={showPassword ? "text" : "password"}
                                  placeholder="Создайте пароль"
                                  className="pl-10 pr-10 h-12 font-[Pixel] bg-white text-black placeholder:text-black/50 border-black focus:border-black focus:ring-0"
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
                            <FormLabel className="text-white font-[Pixel]">Подтвердите пароль</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black/60 w-4 h-4" />
                                <Input 
                                  {...field} 
                                  type={showConfirmPassword ? "text" : "password"}
                                  placeholder="Повторите пароль"
                                  className="pl-10 pr-10 h-12 font-[Pixel] bg-white text-black placeholder:text-black/50 border-black focus:border-black focus:ring-0"
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

                      <div className="text-sm text-white/90 font-[Pixel]">
                        <label className="flex items-start gap-2">
                          <input type="checkbox" className="rounded mt-1" />
                          <span className="text-sm">
                            Я согласен с{" "}
                            <a href="#" className="text-white/90 underline hover:text-cyan-500">
                              условиями использования
                            </a>{" "}
                            и{" "}
                            <a href="#" className="text-white/90 underline hover:text-cyan-500">
                              политикой конфиденциальности
                            </a>
                          </span>
                        </label>
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full h-12 bg-cyan-500 text-white hover:bg-white hover:text-black border border-black transition-colors font-[Pixel]"
                      >
                        Зарегистрироваться
                        <ArrowRight className="w-5 h-5 ml-2" style={{ animation: 'bounce-right 2s infinite' }} />
                      </Button>
                    </form>
                  </Form>
                </TabsContent>
              </Tabs>

              {/* Дополнительные опции */}
              <div className="mt-2 pt-4 border-t border-black">
                <div className="text-center text-sm text-white/90 font-[Pixel] mb-4">
                  или войдите через
                </div>
                <div className="flex justify-center gap-4">
                  <Button variant="outline" className="h-12 w-12 rounded-full p-0 border-black bg-white hover:bg-black flex items-center justify-center">
                   <img src={GoogleLogo} alt="Google" className="w-6 h-6" />
                  </Button>
                  <Button variant="outline" className="h-12 w-12 rounded-full p-0 border-black bg-white hover:bg-black flex items-center justify-center">
                    <img src={TelegramIcon} alt="Telegram" className="w-6 h-6" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}