#FROM openjdk:oraclelinux8
#
#WORKDIR /app
#COPY .mvn/ .mvn
#COPY mvnw pom.xml ./
#RUN ./mvnw dependency:go-offline
#COPY src ./src
#CMD ["./mvnw", "spring-boot:run"]

FROM maven:3.8.3-openjdk-17 AS build

RUN mkdir /project

COPY . /project

WORKDIR /project

RUN mvn clean package

FROM openjdk:17-alpine

RUN mkdir /backend-app

COPY --from=build /project/target/*.jar /backend-app/backend-app.jar

WORKDIR /backend-app

CMD java $JAVA_OPTS -jar backend-app.jar