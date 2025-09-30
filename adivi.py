# Juego: Adivina el animal
animal = "tigre"

# Intentos


i = 1
print("¡Bienvenido al juego: Adivina el animal!\n")
while True:
      
    respuesta = input("¿Qué animal crees que es? ").lower()
    
    if respuesta == animal:
        print("\n🎉 ¡Correcto! Adivinaste el animal en el intento", i)
        break
    else:
        print("❌ Incorrecto. Intenta de nuevo.\n")
    
      # Mostrar pista según el intento
    if i == 3:
        print("Pista: Es un felino muy grande.")
    elif i == 2:
        print("Pista:Tiene rayas negras en su cuerpo.")
    else:
        print("Pista: Es conocido como el rey de la selva en Asia.")
    
    i += 1

    if i > intentos:
        print("😢 Se acabaron tus intentos. El animal era:", animal)
