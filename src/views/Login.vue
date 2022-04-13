<template>
  <h1 class="text-center">Login</h1>
  <a-row>
    <a-col :xs="{ span: 24 }" :sm="{ span: 12, offset: 6 }">
      <a-form
        name="basicLogin"
        autocomplete="off"
        layout="vertical"
        :model="formState"
        @finish="onFinish"
        @finishFailed="onFinishFailed"
      >
        <a-form-item
          name="email"
          label="Ingresa tu correo"
          :rules="[
            {
              required: true,
              whitespace: true,
              type: 'email',
              message: 'Ingresa un email valido',
            },
          ]"
        >
          <a-input v-model:value="formState.email"></a-input>
        </a-form-item>
        <a-form-item
          name="password"
          label="Ingrese contraseña"
          :rules="[
            {
              required: true,
              min: 6,
              whitespace: true,
              message: 'Ingresa una contraseña con mínimo 6 carácteres',
            },
          ]"
        >
          <a-input-password
            v-model:value="formState.password"
          ></a-input-password>
        </a-form-item>
        <a-form-item>
          <a-button
            type="primary"
            html-type="submit"
            :disabled="userStore.loadingUser"
            :loading="userStore.loadingUser"
            >Ingresar</a-button
          >
        </a-form-item>
      </a-form>
    </a-col>
  </a-row>
</template>

<script setup>
import { reactive } from 'vue';
import { useUserStore } from '../stores/user';
import { message } from 'ant-design-vue';

const userStore = useUserStore();
// const router = useRouter();

const formState = reactive({
  email: 'hega@test.com',
  password: '123123',
});

const onFinish = async (values) => {
  console.log('Success:', values);
  const error = await userStore.loginUser(formState.email, formState.password);

  if (!error) {
    return message.success('Bienvenidos a la super apps 🚀');
  }

  switch (error) {
    case 'auth/user-not-found':
      message.error('No existe el correo registrado 🚀');
      break;

    case 'auth/wrong-password':
      message.error('Error de contraseña 🚀');
      break;

    default:
      message.error(
        'Ocurrió un error en el servidor 🚀 intentelo más tarde...'
      );
      break;
  }

  // router.push('/');
};

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
</script>
