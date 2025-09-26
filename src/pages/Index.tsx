import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

interface Student {
  id: number;
  name: string;
  group: string;
  avatar: string;
  averageGrade: number;
  attendance: number;
}

interface Grade {
  id: number;
  studentId: number;
  studentName: string;
  subject: string;
  grade: number;
  date: string;
  type: 'exam' | 'test' | 'homework';
}

const Index = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const students: Student[] = [
    { id: 1, name: 'Анна Иванова', group: 'ИТ-21', avatar: 'AI', averageGrade: 4.8, attendance: 95 },
    { id: 2, name: 'Максим Петров', group: 'ИТ-21', avatar: 'МП', averageGrade: 4.2, attendance: 88 },
    { id: 3, name: 'София Сидорова', group: 'ИТ-22', avatar: 'СС', averageGrade: 4.9, attendance: 97 },
    { id: 4, name: 'Даниил Козлов', group: 'ИТ-22', avatar: 'ДК', averageGrade: 3.8, attendance: 82 },
    { id: 5, name: 'Елена Морозова', group: 'ИТ-21', avatar: 'ЕМ', averageGrade: 4.5, attendance: 91 },
  ];

  const grades: Grade[] = [
    { id: 1, studentId: 1, studentName: 'Анна Иванова', subject: 'Математика', grade: 5, date: '2024-09-25', type: 'exam' },
    { id: 2, studentId: 2, studentName: 'Максим Петров', subject: 'Физика', grade: 4, date: '2024-09-24', type: 'test' },
    { id: 3, studentId: 3, studentName: 'София Сидорова', subject: 'Программирование', grade: 5, date: '2024-09-23', type: 'homework' },
    { id: 4, studentId: 4, studentName: 'Даниил Козлов', subject: 'Математика', grade: 3, date: '2024-09-22', type: 'test' },
    { id: 5, studentId: 1, studentName: 'Анна Иванова', subject: 'Физика', grade: 5, date: '2024-09-21', type: 'homework' },
  ];

  const getGradeColor = (grade: number) => {
    if (grade >= 4.5) return 'bg-success text-success-foreground';
    if (grade >= 3.5) return 'bg-yellow-500 text-white';
    return 'bg-destructive text-destructive-foreground';
  };

  const getGradeTypeIcon = (type: string) => {
    switch (type) {
      case 'exam': return 'FileText';
      case 'test': return 'ClipboardList';
      case 'homework': return 'BookOpen';
      default: return 'FileText';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-blue-600 rounded-lg flex items-center justify-center">
              <Icon name="GraduationCap" size={18} className="text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Система Успеваемости</h1>
          </div>
          <Button variant="outline" className="gap-2">
            <Icon name="Bell" size={16} />
            Уведомления
          </Button>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 px-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 max-w-md">
            <TabsTrigger value="dashboard" className="gap-2">
              <Icon name="BarChart3" size={16} />
              Дашборд
            </TabsTrigger>
            <TabsTrigger value="students" className="gap-2">
              <Icon name="Users" size={16} />
              Студенты
            </TabsTrigger>
            <TabsTrigger value="grades" className="gap-2">
              <Icon name="FileText" size={16} />
              Оценки
            </TabsTrigger>
            <TabsTrigger value="reports" className="gap-2">
              <Icon name="TrendingUp" size={16} />
              Отчеты
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </nav>

      {/* Main Content */}
      <main className="p-6">
        <Tabs value={activeTab} className="w-full">
          
          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="pb-3">
                  <CardDescription>Всего студентов</CardDescription>
                  <CardTitle className="text-3xl text-primary">125</CardTitle>
                </CardHeader>
              </Card>
              
              <Card>
                <CardHeader className="pb-3">
                  <CardDescription>Средний балл</CardDescription>
                  <CardTitle className="text-3xl text-success">4.3</CardTitle>
                </CardHeader>
              </Card>
              
              <Card>
                <CardHeader className="pb-3">
                  <CardDescription>Посещаемость</CardDescription>
                  <CardTitle className="text-3xl text-primary">89%</CardTitle>
                </CardHeader>
              </Card>
              
              <Card>
                <CardHeader className="pb-3">
                  <CardDescription>Задолженности</CardDescription>
                  <CardTitle className="text-3xl text-destructive">12</CardTitle>
                </CardHeader>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="TrendingUp" size={20} />
                    Динамика успеваемости
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Сентябрь 2024</span>
                        <span className="text-success">4.2</span>
                      </div>
                      <Progress value={84} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Август 2024</span>
                        <span className="text-success">4.1</span>
                      </div>
                      <Progress value={82} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Июль 2024</span>
                        <span className="text-yellow-600">3.9</span>
                      </div>
                      <Progress value={78} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="AlertTriangle" size={20} />
                    Требуют внимания
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {students.filter(s => s.averageGrade < 4.0 || s.attendance < 85).map(student => (
                      <div key={student.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center text-white font-medium">
                            {student.avatar}
                          </div>
                          <div>
                            <p className="font-medium">{student.name}</p>
                            <p className="text-sm text-gray-500">{student.group}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge variant={student.averageGrade < 4.0 ? "destructive" : "secondary"}>
                            {student.averageGrade < 4.0 ? "Низкие оценки" : "Прогулы"}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Students Tab */}
          <TabsContent value="students" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Users" size={20} />
                  Список студентов
                </CardTitle>
                <CardDescription>Управление данными студентов и их успеваемостью</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {students.map(student => (
                    <div key={student.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                          {student.avatar}
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{student.name}</h3>
                          <p className="text-gray-600">{student.group}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-6 text-right">
                        <div>
                          <p className="text-sm text-gray-500">Средний балл</p>
                          <Badge className={getGradeColor(student.averageGrade)}>
                            {student.averageGrade.toFixed(1)}
                          </Badge>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Посещаемость</p>
                          <p className="font-semibold">{student.attendance}%</p>
                        </div>
                        <Button variant="outline" size="sm">
                          <Icon name="Eye" size={14} />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Grades Tab */}
          <TabsContent value="grades" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="FileText" size={20} />
                  Журнал оценок
                </CardTitle>
                <CardDescription>Последние выставленные оценки по всем предметам</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {grades.map(grade => (
                    <div key={grade.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-center gap-4">
                        <Icon name={getGradeTypeIcon(grade.type)} size={20} className="text-gray-500" />
                        <div>
                          <h3 className="font-semibold">{grade.studentName}</h3>
                          <p className="text-sm text-gray-600">{grade.subject}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <Badge variant={grade.type === 'exam' ? 'default' : 'secondary'}>
                          {grade.type === 'exam' ? 'Экзамен' : grade.type === 'test' ? 'Тест' : 'ДЗ'}
                        </Badge>
                        <Badge className={getGradeColor(grade.grade)}>
                          {grade.grade}
                        </Badge>
                        <p className="text-sm text-gray-500">{grade.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Reports Tab */}
          <TabsContent value="reports" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="PieChart" size={20} />
                    Распределение оценок
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>Отличники (4.5-5.0)</span>
                      <Badge className="bg-success text-success-foreground">42%</Badge>
                    </div>
                    <Progress value={42} className="h-2" />
                    
                    <div className="flex justify-between items-center">
                      <span>Хорошисты (3.5-4.4)</span>
                      <Badge className="bg-yellow-500 text-white">35%</Badge>
                    </div>
                    <Progress value={35} className="h-2" />
                    
                    <div className="flex justify-between items-center">
                      <span>Троечники (2.5-3.4)</span>
                      <Badge className="bg-destructive text-destructive-foreground">23%</Badge>
                    </div>
                    <Progress value={23} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Calendar" size={20} />
                    Посещаемость по группам
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>ИТ-21</span>
                        <span>91%</span>
                      </div>
                      <Progress value={91} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>ИТ-22</span>
                        <span>87%</span>
                      </div>
                      <Progress value={87} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>ИТ-23</span>
                        <span>94%</span>
                      </div>
                      <Progress value={94} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Download" size={20} />
                  Экспорт отчетов
                </CardTitle>
                <CardDescription>Создание отчетов для администрации и родителей</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button variant="outline" className="h-20 flex-col gap-2">
                    <Icon name="FileSpreadsheet" size={24} />
                    Сводная таблица
                  </Button>
                  <Button variant="outline" className="h-20 flex-col gap-2">
                    <Icon name="Mail" size={24} />
                    Уведомления родителям
                  </Button>
                  <Button variant="outline" className="h-20 flex-col gap-2">
                    <Icon name="BarChart" size={24} />
                    Аналитический отчет
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;