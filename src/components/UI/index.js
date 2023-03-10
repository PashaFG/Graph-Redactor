//Icons
import UsersIcon from '@/components/UI/Icon/UsersIcon.vue'
import AnalyticsIcon from '@/components/UI/Icon/AnalyticsIcon.vue'
import GearIcon from '@/components/UI/Icon/GearIcon.vue'
import BranchIcon from '@/components/UI/Icon/BranchIcon.vue'
import ExelIcon from '@/components/UI/Icon/ExelIcon.vue'
import PrintIcon from '@/components/UI/Icon/PrintIcon.vue'
import SearchIcon from '@/components/UI/Icon/SearchIcon.vue'
import CrossIcon from '@/components/UI/Icon/CrossIcon.vue'
import MinusIcon from '@/components/UI/Icon/MinusIcon.vue'
import PlusIcon from '@/components/UI/Icon/PlusIcon.vue'
import DeleteIcon from '@/components/UI/Icon/DeleteIcon.vue'

//UI Components
import UserColorful from '@/components/UI/UserColorful.vue'
import MainButton from '@/components/UI/MainButton.vue'
import CreateButton from '@/components/UI/CreateButton.vue'
import MainSelect from '@/components/UI/MainSelect.vue'
import MainInput from '@/components/UI/MainInput.vue'


//Modules components
import EditUserComponents from '@/modules/EditUser/components/UI/index.js'
import UserListComponents from '@/modules/UserList/components/UI/index.js'
import BranchesComponents from '@/modules/BranchesEditor/components/UI/index.js'

const icons = [
  UsersIcon,
  AnalyticsIcon,
  GearIcon,
  BranchIcon,
  ExelIcon,
  PrintIcon,
  SearchIcon,
  CrossIcon,
  MinusIcon,
  PlusIcon,
  DeleteIcon
]

const components = [
  UserColorful,
  MainButton,
  MainSelect,
  MainInput,
  CreateButton
]

const modules = [
  ...EditUserComponents,
  ...UserListComponents,
  ...BranchesComponents
]

export default [
  ...icons,
  ...components,
  ...modules
]