# Stage 1: Build stage with Maven and Eclipse Temurin (OpenJDK 17)
FROM jelastic/maven:3.9.5-openjdk-21 AS build

# Set the working directory
WORKDIR /app

# Copy the pom.xml first to leverage Docker cache
COPY pom.xml .
RUN mvn dependency:go-offline

# Copy the source code
COPY src ./src

# Build the project
RUN mvn clean package -DskipTests

# Stage 2: Deployment stage with OpenJDK 21
FROM eclipse-temurin:21-jdk

# Set the working directory
WORKDIR /app

# Copy the built JAR file from the build stage
COPY --from=build /app/target/Feng-Shui-Koi-Consulting-System-0.0.1-SNAPSHOT.jar .

# Expose the application port
EXPOSE 8080

# Run the application
ENTRYPOINT ["java", "-jar", "Feng-Shui-Koi-Consulting-System-0.0.1-SNAPSHOT.jar"]