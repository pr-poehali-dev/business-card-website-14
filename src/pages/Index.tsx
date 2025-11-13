import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Calculator" className="text-primary" size={32} />
            <span className="text-xl font-bold text-secondary">Бизнес Трейдинг</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">
              Главная
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              О компании
            </a>
            <a href="#contacts" className="text-foreground hover:text-primary transition-colors">
              Контакты
            </a>
          </nav>
          <Button className="hidden md:flex">
            <Icon name="Phone" size={18} className="mr-2" />
            Связаться
          </Button>
        </div>
      </header>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl font-bold text-secondary mb-6 leading-tight">
                Профессиональное обслуживание кассовой техники
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Регистрация касс в налоговой, замена фискальных накопителей, техническое обслуживание и учёт КТ
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="gap-2">
                  <Icon name="MessageSquare" size={20} />
                  Оставить заявку
                </Button>
                <Button size="lg" variant="outline">
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img
                src="https://cdn.poehali.dev/projects/6d91cef4-c869-4aa2-89e0-14f91c0384f6/files/d2934f30-1e2d-4c46-8573-dac79bfdbc3c.jpg"
                alt="Кассовая техника"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-secondary mb-16">
            Наши услуги
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow duration-300 animate-fade-in">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Icon name="FileCheck" className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-secondary">
                  Регистрация касс
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Быстрая регистрация контрольно-кассовой техники в налоговой службе. Полное сопровождение документов и консультации по всем вопросам.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300 animate-fade-in delay-100">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                  <Icon name="RefreshCw" className="text-accent" size={32} />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-secondary">
                  Замена фискальных накопителей
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Оперативная замена фискальных накопителей с гарантией качества. Работаем со всеми моделями кассовой техники.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300 animate-fade-in delay-200">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Icon name="Wrench" className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-secondary">
                  Техническое обслуживание
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Регулярное обслуживание и ремонт кассовых аппаратов. Профилактика поломок и оперативное устранение неисправностей.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-scale-in">
              <img
                src="https://cdn.poehali.dev/projects/6d91cef4-c869-4aa2-89e0-14f91c0384f6/files/1c6a6577-941b-4d23-84f4-8399d274c970.jpg"
                alt="О компании"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold text-secondary mb-6">
                О компании
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Бизнес Трейдинг — профессиональная компания по обслуживанию кассовой техники с многолетним опытом работы. Мы помогаем бизнесу соблюдать требования законодательства и обеспечиваем бесперебойную работу кассового оборудования.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Shield" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1 text-secondary">Надёжность</h4>
                    <p className="text-muted-foreground">
                      Работаем строго по законодательству и гарантируем качество услуг
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Zap" className="text-accent" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1 text-secondary">Оперативность</h4>
                    <p className="text-muted-foreground">
                      Быстрое решение любых задач, связанных с кассовой техникой
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Users" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1 text-secondary">Поддержка</h4>
                    <p className="text-muted-foreground">
                      Полное сопровождение клиентов на всех этапах работы
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold text-secondary mb-6">
                Почему выбирают нас?
              </h2>
              <div className="grid grid-cols-2 gap-6">
                <Card className="text-center p-6">
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <p className="text-muted-foreground">Довольных клиентов</p>
                </Card>
                <Card className="text-center p-6">
                  <div className="text-4xl font-bold text-accent mb-2">7 лет</div>
                  <p className="text-muted-foreground">На рынке</p>
                </Card>
                <Card className="text-center p-6">
                  <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                  <p className="text-muted-foreground">Поддержка</p>
                </Card>
                <Card className="text-center p-6">
                  <div className="text-4xl font-bold text-accent mb-2">100%</div>
                  <p className="text-muted-foreground">Гарантия</p>
                </Card>
              </div>
            </div>
            <div className="animate-scale-in">
              <img
                src="https://cdn.poehali.dev/projects/6d91cef4-c869-4aa2-89e0-14f91c0384f6/files/8013b296-8e93-4c33-bef8-9a3af2d948de.jpg"
                alt="Наши преимущества"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center text-secondary mb-6">
            Свяжитесь с нами
          </h2>
          <p className="text-center text-lg text-muted-foreground mb-12">
            Оставьте заявку, и мы свяжемся с вами в ближайшее время
          </p>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-fade-in">
              <Card className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-secondary">
                      Ваше имя
                    </label>
                    <Input
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-secondary">
                      Телефон
                    </label>
                    <Input
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-secondary">
                      Email
                    </label>
                    <Input
                      type="email"
                      placeholder="ivan@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-secondary">
                      Сообщение
                    </label>
                    <Textarea
                      placeholder="Расскажите о вашей задаче..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </Card>
            </div>
            <div className="animate-fade-in space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1 text-secondary">Адрес офиса</h4>
                  <p className="text-muted-foreground">
                    г. Москва, ул. Примерная, д. 123
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" className="text-accent" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1 text-secondary">Телефон</h4>
                  <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  <p className="text-muted-foreground">+7 (800) 555-35-35</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1 text-secondary">Email</h4>
                  <p className="text-muted-foreground">info@biztrade.ru</p>
                  <p className="text-muted-foreground">support@biztrade.ru</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Clock" className="text-accent" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1 text-secondary">Режим работы</h4>
                  <p className="text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
                  <p className="text-muted-foreground">Сб-Вс: Выходной</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Calculator" size={28} />
                <span className="text-xl font-bold">Бизнес Трейдинг</span>
              </div>
              <p className="text-white/80">
                Профессиональное обслуживание кассовой техники
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Навигация</h4>
              <ul className="space-y-2 text-white/80">
                <li>
                  <a href="#home" className="hover:text-white transition-colors">
                    Главная
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-white transition-colors">
                    О компании
                  </a>
                </li>
                <li>
                  <a href="#contacts" className="hover:text-white transition-colors">
                    Контакты
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Контакты</h4>
              <ul className="space-y-2 text-white/80">
                <li>+7 (495) 123-45-67</li>
                <li>info@biztrade.ru</li>
                <li>г. Москва, ул. Примерная, 123</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/60">
            <p>&copy; 2024 Бизнес Трейдинг. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
