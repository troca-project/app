import { Text, View } from "react-native";


export const LandingText = () => {
  return (
    <View className="mb-5">
      <Text className="text-2xl font-bold">Descubre</Text>
      <Text className="text-slate-500">
        {getFormattedDate()}
      </Text>
    </View>
  );
};

function getDayName(day: number): string {
    const daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    return daysOfWeek[day];
}

function getMonthName(month: number): string {
    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    return months[month];
}

function getFormattedDate(): string {
    const currentDate = new Date();
    const dayOfWeek = getDayName(currentDate.getDay());
    const dayOfMonth = currentDate.getDate();
    const month = getMonthName(currentDate.getMonth());
    return `${dayOfWeek} ${dayOfMonth}, ${month}`;
}
